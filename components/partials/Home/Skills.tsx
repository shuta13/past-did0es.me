import React from "react";
import "./Skills.scss";

const Skills: React.FC = () => (
  <div className="SkillsWrap">
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        <p>Web Development, Design, Track Making, DJ</p>
        <a
          href="https://www.wantedly.com/users/95976645"
          target="_blank"
          className="SkillsLink"
          rel="noopener noreferrer"
        >
          Wantedly : https://www.wantedly.com/users/95976645
        </a>
      </div>
    </div>
    <div className="SkillsTitleWrap">
      <div className="SkillsTitle">Language / Library / FrameWork</div>
    </div>
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        <p>HTML, CSS, JavaScript, TypeScript, Ruby, GLSL, C/C++</p>
        <p>
          React.js, Vue.js, Three.js, Node.js, pug, sass, Jest, ESLint, Webpack
        </p>
        <p>
          Next.js, Gatsby.js, Nuxt.js, Rails, Serverless Framework, Web
          Components
        </p>
      </div>
    </div>
    <div className="SkillsTitleWrap">
      <div className="SkillsTitle">Others</div>
    </div>
    <div className="SkillsDescriptionWrap">
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
    </div>
  </div>
);

export default Skills;
