#ifdef GL_ES
precision highp float;
#endif

uniform vec2 resolution;
uniform float time;
uniform sampler2D texture;

// // Description : Array and textureless GLSL 2D/3D/4D simplex noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  vec3 color = vec3(.085);

  // mosaic
  float size = 90.;
  // uv = vec2(floor(uv * size)) / size;

  // neutral
  // color = texture2D(u_texture, uv).rgb;

  // rgb shift
  // color.r = texture2D(u_texture, vec2(uv.x + .035, uv.y)).r;
  // color.g = texture2D(u_texture, vec2(uv.x, uv.y - .015)).g;
  // color.b = texture2D(u_texture, vec2(uv.x - .035, uv.y)).b;

  // color -= snoise(vec3(uv.x, uv.y, 1.9));

  // glitch
  if (mod(uv.x * 10., 2.) < 1. && mod(time, 2.) < 3. * snoise(vec3(uv.x, uv.x, time * 10.))) {
    uv = vec2(floor(uv * size)) / size;
    color += texture2D(texture, vec2(uv.x - .01, uv.y)).rgb;
  } else {
    color.r += texture2D(texture, vec2(uv.x + .015, uv.y)).r;
    color.g += texture2D(texture, vec2(uv.x, uv.y - .005)).g;
    color.b += texture2D(texture, vec2(uv.x - .015, uv.y)).b;
  }

  gl_FragColor = vec4(color, 1.);
}

// float random(vec2 p) {
//   return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
// }

// // // Description : Array and textureless GLSL 2D/3D/4D simplex noise functions.
// //      Author : Ian McEwan, Ashima Arts.
// //  Maintainer : stegu
// //     Lastmod : 20110822 (ijm)
// //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
// //               Distributed under the MIT License. See LICENSE file.
// //               https://github.com/ashima/webgl-noise
// //               https://github.com/stegu/webgl-noise
// //

// vec3 mod289(vec3 x) {
//   return x - floor(x * (1.0 / 289.0)) * 289.0;
// }
// vec4 mod289(vec4 x) {
//   return x - floor(x * (1.0 / 289.0)) * 289.0;
// }
// vec4 permute(vec4 x) {
//   return mod289(((x*34.0)+1.0)*x);
// }
// vec4 taylorInvSqrt(vec4 r) {
//   return 1.79284291400159 - 0.85373472095314 * r;
// }
// float snoise(vec3 v) {
//   const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
//   const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

//   vec3 i  = floor(v + dot(v, C.yyy) );
//   vec3 x0 =   v - i + dot(i, C.xxx) ;

//   vec3 g = step(x0.yzx, x0.xyz);
//   vec3 l = 1.0 - g;
//   vec3 i1 = min( g.xyz, l.zxy );
//   vec3 i2 = max( g.xyz, l.zxy );

//   vec3 x1 = x0 - i1 + C.xxx;
//   vec3 x2 = x0 - i2 + C.yyy;
//   vec3 x3 = x0 - D.yyy;

//   i = mod289(i);
//   vec4 p = permute( permute( permute(
//              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
//            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
//            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

//   float n_ = 0.142857142857;
//   vec3  ns = n_ * D.wyz - D.xzx;

//   vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

//   vec4 x_ = floor(j * ns.z);
//   vec4 y_ = floor(j - 7.0 * x_ );

//   vec4 x = x_ *ns.x + ns.yyyy;
//   vec4 y = y_ *ns.x + ns.yyyy;
//   vec4 h = 1.0 - abs(x) - abs(y);

//   vec4 b0 = vec4( x.xy, y.xy );
//   vec4 b1 = vec4( x.zw, y.zw );

//   vec4 s0 = floor(b0)*2.0 + 1.0;
//   vec4 s1 = floor(b1)*2.0 + 1.0;
//   vec4 sh = -step(h, vec4(0.0));

//   vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
//   vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

//   vec3 p0 = vec3(a0.xy,h.x);
//   vec3 p1 = vec3(a0.zw,h.y);
//   vec3 p2 = vec3(a1.xy,h.z);
//   vec3 p3 = vec3(a1.zw,h.w);

//   vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
//   p0 *= norm.x;
//   p1 *= norm.y;
//   p2 *= norm.z;
//   p3 *= norm.w;

//   vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
//   m = m * m;
//   return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
//                                 dot(p2,x2), dot(p3,x3) ) );
// }

// void main() {
//   vec2 uv = gl_FragCoord.xy / resolution;
//   // ノイズ
//   // uv.y += snoise(vec3(uv.x, uv.y, time * .1)) * .02;
//   // rgb shift
//   vec3 color = vec3(.085);
//   color.r += texture2D(texture, vec2(uv.x - .02 * snoise(vec3(uv.x + time * .5)), uv.y)).r * .8;
//   color.g += texture2D(texture, vec2(uv.x - .03 * snoise(vec3(uv.x + time * .5)), uv.y)).g * .8;
//   color.b += texture2D(texture, vec2(uv.x, uv.y - .02 * snoise(vec3(uv.y + time * .5)))).b;
//   // color.r += texture2D(texture, vec2(uv.x - snoise(vec3(uv.x * time * .4)) * .01, uv.y - .01 * snoise(vec3(uv.y * time)))).r * .8;
//   // color.g += texture2D(texture, vec2(uv.x - snoise(vec3(uv.x * time * .4)) * .005, uv.y)).g * .2;
//   // color.b += texture2D(texture, vec2(uv.x - snoise(vec3(uv.x * time * .4)) * .4, uv.y)).b * .2;
//   gl_FragColor = vec4(color, 1.);
// }