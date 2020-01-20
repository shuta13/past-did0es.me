import React from 'react'
import './Skills.scss'

const Skills: React.FC = () => (
  <div className="SkillsWrap">
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        <p>Web Development(Design, Coding, building CI/CD)</p>
        <p>Making Track, DJ(Future Bass, Progressive House, Pops...)</p>
      </div>
    </div>
    <div className="SkillsTitleWrap">
      <div className="SkillsTitle">
        Language / Library / FrameWork
      </div>
    </div>
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        <p>JavaScript, TypeScript, Ruby, C/C++, OpenGL</p>
        <p>React.js, Vue.js, Three.js, Node.js, Jest, ESLint, Webpack</p>
        <p>Next.js, Gatsby.js, Nuxt.js, Rails, Laravel, Serverless Framework</p>
      </div>
    </div>
    <div className="SkillsTitleWrap">
      <div className="SkillsTitle">
        Tools / PaaS, SaaS
      </div>
    </div>
    <div className="SkillsDescriptionWrap">
      <div className="SkillsDescription">
        <p>Docker, macOS, Linux, Windows, GitHub</p>
        <p>GitHub Actions, CircleCI, TravisCI, Figma, Cubase 9.5</p>
        <p>Netlify, Zeit Now, Heroku, Firebase Hosting, AWS Lambda</p>
      </div>
    </div>
    <div className="SkillsLinkWrap">
      <a href="https://www.wantedly.com/users/95976645" target="_blank" className="SkillsLink">Wantedly : https://www.wantedly.com/users/95976645</a>
    </div>
  </div>
)

export default Skills;