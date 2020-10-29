#ifdef GL_ES
// precision mediump float;
precision highp float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 resolution;
uniform float time;

// Some useful functions
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

//
// Description : GLSL 2D simplex noise function
//      Author : Ian McEwan, Ashima Arts
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License :
//  Copyright (C) 2011 Ashima Arts. All rights reserved.
//  Distributed under the MIT License. See LICENSE file.
//  https://github.com/ashima/webgl-noise
//
float snoise(vec2 v) {
  // Precompute values for skewed triangular grid
  const vec4 C = vec4(0.211324865405187,
                      // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,
                      // 0.5*(sqrt(3.0)-1.0)
                      -0.577350269189626,
                      // -1.0 + 2.0 * C.x
                      0.024390243902439);
                      // 1.0 / 41.0

  // First corner (x0)
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);

  // Other two corners (x1, x2)
  vec2 i1 = vec2(0.0);
  i1 = (x0.x > x0.y)? vec2(1.0, 0.0):vec2(0.0, 1.0);
  vec2 x1 = x0.xy + C.xx - i1;
  vec2 x2 = x0.xy + C.zz;

  // Do some permutations to avoid
  // truncation effects in permutation
  i = mod289(i);
  vec3 p = permute(
          permute( i.y + vec3(0.0, i1.y, 1.0))
              + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(
                      dot(x0,x0),
                      dot(x1,x1),
                      dot(x2,x2)
                      ), 0.0);

  m = m*m ;
  m = m*m ;

  // Gradients:
  //  41 pts uniformly over a line, mapped onto a diamond
  //  The ring size 17*17 = 289 is close to a multiple
  //      of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  // Normalise gradients implicitly by scaling m
  // Approximation of: m *= inversesqrt(a0*a0 + h*h);
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0+h*h);

  // Compute final noise value at P
  vec3 g = vec3(0.0);
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * vec2(x1.x,x2.x) + h.yz * vec2(x1.y,x2.y);
  return 130.0 * dot(m, g);
}

vec2 random2( vec2 p ) {
  return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

void main() {
  vec2 uv = gl_FragCoord.xy/resolution.xy -.5;
  vec3 color = vec3(0.15);

  uv *= 4.;

  vec2 fUv = floor(uv);
  vec2 iUv = fract(uv);

  float size = 2.;
  uv = floor(uv * size + snoise(vec2(uv.y + time * .2, uv.x + time * .2) * .4)) / size;
  // uv = floor(uv * size) / size;

  // background
  uv.x += snoise(uv * .5);
  float sync = time * .2;
  uv += .5;

  if (snoise(vec2(uv.x + sync, uv.x + sync)) < 1.0) {
    color.r = vec3(mix(uv.x, uv.x, snoise(vec2(uv.x + time, uv.y + time)))).g * .10;
    color.g += vec3(mix(uv.x, uv.x, snoise(vec2(uv.x + time, uv.y + time)))).g * .50;
    color.b += vec3(mix(uv.y, uv.y, snoise(vec2(uv.x + time, uv.y + time)))).b * .40;
    // 光沢
    color += smoothstep(.2, .45, snoise(uv + sync) * .4);
  }

  /// voronoi : https://thebookofshaders.com/edit.php#12/vorono-01.frag
  float minDist = 10.;
  vec2 minPoint;

  for (int j = -1; j < 1; j++) {
    for (int i = -1; i < 1; i++) {
      vec2 neighbor = vec2(float(i), float(j));
      vec2 point = random2(fUv + neighbor);
      point = .5 + .5 * sin(time * .2 + 6.2831 * point);
      vec2 diff = neighbor + point - iUv;
      float dist = length(diff);

      if (dist < minDist) {
        minDist = dist;
        minPoint = point;
      }
    }
  }

  color *= dot(minPoint, vec2(.3, .6));

  gl_FragColor = vec4(color, 1.0);
}
