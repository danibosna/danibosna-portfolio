import React from 'react'
import HardSkill from '../components/HardSkill.jsx';
import SoftSkill from '../components/SoftSkill.jsx';
import htmlImg from "@images/html_icon.png";
import cssImg from "@images/css_icon.png";
import jsImg from "@images/javascript_icon.png";
import sassImg from "@images/sass_icon.png";
import bootstrapImg from "@images/bootstrap_icon.png";
import wordpressImg from "@images/wordpress_icon.png";
import gitImg from "@images/git_icon.png";
import nodejsImg from "@images/nodejs_icon.png";
import githubSkillImg from "@images/github_icon.png";

const Skills = () => {
  return (
    <section id="skills" className="skills__box container">
      <h2 className="skills__titles titles">Skills</h2>
      <div className="skills__hard">
        <h3>Hard Skills</h3>
        <HardSkill
          src={htmlImg}
        />
        <HardSkill
          src={cssImg}
        />
        <HardSkill
          src={jsImg}
        />
        <HardSkill
          src={sassImg}
        />
        <HardSkill
          src={bootstrapImg}
        />
        <HardSkill
          src={wordpressImg}
        />
        <HardSkill
          src={gitImg}
        />
        <HardSkill
          src={nodejsImg}
        />
        <HardSkill
          src={githubSkillImg}
        />
      </div>
      <div className="skills__soft">
        <h3>Soft Skills</h3>
        <SoftSkill/>
      </div>
    </section>
  )
}

export default Skills;