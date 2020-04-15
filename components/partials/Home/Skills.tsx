import React from "react";
import "./Skills.scss";

const Skills: React.FC = () => (
  <div className="SkillsWrap">
    <div className="SkillsDescription" style={{ textAlign: "center" }}>
      <p>Web Development, Design, Track Making, DJ</p>
    </div>
    <div className="SkillsTitle">Language / Library / FrameWork</div>
    <div className="SkillsDescription">
      <p>HTML, CSS, JavaScript, TypeScript, Ruby, GLSL, C/C++</p>
      <p>
        React.js, Vue.js, Three.js, Node.js, pug, sass, Jest, ESLint, Webpack
      </p>
      <p>
        Next.js, Gatsby.js, Nuxt.js, Rails, Serverless Framework, Web Components
      </p>
    </div>
    <div className="SkillsTitle">Others</div>
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
    <a
      href="https://www.wantedly.com/users/95976645"
      target="_blank"
      className="SkillsLink"
      rel="noopener noreferrer"
    >
      Detail
    </a>
  </div>
);

export default Skills;
