import React from "react";
import "./Skills.scss";
import { ExternalLink } from "../../common/ExternalLink";
import AppTitle from "../../common/AppTitle";

const Skills: React.FC = () => (
  <div className="SkillsWrap">
    <div className="SkillsDescription" style={{ textAlign: "center" }}>
      <p>Web Development, Design, Track Making, DJ</p>
    </div>
    <AppTitle title="Language / Library / FrameWork" />
    <div className="SkillsDescription">
      <p>HTML, CSS, JavaScript, TypeScript, Ruby, GLSL, C/C++</p>
      <p>
        React.js, Vue.js, Three.js, Node.js, pug, sass, Jest, ESLint, Webpack
      </p>
      <p>
        Next.js, Gatsby.js, Nuxt.js, Rails, Serverless Framework, Web Components
      </p>
    </div>
    <AppTitle title="Others" />
    <div className="SkillsDescription">
      <p>
        Docker, macOS, Linux(Ubuntu, CentOS, Arch Linux), Raspbian, Figma,
        Sketch
      </p>
      <p>GitHub Actions, CircleCI, TravisCI, AWS Codepipeline/Codebuild</p>
      <p>
        Netlify, Zeit Now, Google App Engine, Firebase Hosting, Heroku, AWS
        Lambda, API Gateway
      </p>
    </div>
    <ExternalLink
      href="https://www.wantedly.com/users/95976645"
      text="Detail"
    />
  </div>
);

export default Skills;
