import React from 'react'
import './Skills.scss'

const Skills: React.FC = () => (
  <div className="SkillsWrap">
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        Web Development(Design, Coding, building CI/CD)
        Making Track, DJ(Future Bass, Progressive House, Pops...)
      </div>
    </div>
    <div className="SkillsLinkWrap">
      <a href="https://www.wantedly.com/users/95976645" target="_blank" className="SkillsLink">
        Wantedly : https://www.wantedly.com/users/95976645
      </a>
    </div>
    <div className="SkillsTitleWrap">
      <div className="SkillsTitle">
        Language / Library / FrameWork
      </div>
    </div>
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        JavaScript, TypeScript, Ruby, GLSL, C/C++
        React.js, Vue.js, Three.js, Node.js, Jest, ESLint, Webpack
        Next.js, Gatsby.js, Nuxt.js, Rails, Laravel, Serverless Framework
      </div>
    </div>
    <div className="SkillsTitleWrap">
      <div className="SkillsTitle">
        Tools / PaaS, SaaS
      </div>
    </div>
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        Docker, macOS, Linux, Windows, GitHub
        GitHub Actions, CircleCI, TravisCI, AWS Codepipeline/Codebuild, Figma, Sketch
        Netlify, Zeit Now, Google App Engine, Firebase Hosting, Heroku, AWS Lambda
      </div>
    </div>
  </div>
)

export default Skills;