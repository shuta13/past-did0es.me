import React from "react";
import "./Skills.scss";

const Skills: React.FC = () => (
  <div className="SkillsWrap">
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        <p>Web Development(Design, Coding, building CI/CD)</p>
        <p>Making Track, DJ(Future Bass, Progressive House, Pops...)</p>
      </div>
      <a
        href="https://www.wantedly.com/users/95976645"
        target="_blank"
        className="SkillsLink"
        rel="noopener noreferrer"
      >
        Wantedly : https://www.wantedly.com/users/95976645
      </a>
    </div>
    <div className="SkillsTitleWrap">
      <div className="SkillsTitle">Language / Library / FrameWork</div>
    </div>
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        <p>JavaScript, TypeScript, Ruby, GLSL, C/C++</p>
        <p>React.js, Vue.js, Three.js, Node.js, Jest, ESLint, Webpack</p>
        <p>Next.js, Gatsby.js, Nuxt.js, Rails, Laravel, Serverless Framework</p>
      </div>
    </div>
    <div className="SkillsTitleWrap">
      <div className="SkillsTitle">Tools / PaaS, SaaS</div>
    </div>
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        <p>Docker, macOS, Linux, Windows, GitHub, Figma, Sketch</p>
        <p>GitHub Actions, CircleCI, TravisCI, AWS Codepipeline/Codebuild</p>
        <p>
          Netlify, Zeit Now, Google App Engine, Firebase Hosting, Heroku, AWS
          Lambda
        </p>
      </div>
    </div>
  </div>
);

export default Skills;
