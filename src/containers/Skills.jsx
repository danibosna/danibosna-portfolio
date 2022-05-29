import React from 'react';
import HardSkill from '@components/HardSkill.jsx';
import htmlImg from "@assets/images/html_icon.png";
import cssImg from "@assets/images/css_icon.png";
import jsImg from "@assets/images/javascript_icon.png";
import sassImg from "@assets/images/sass_icon.png";
import bootstrapImg from "@assets/images/bootstrap_icon.png";
import wordpressImg from "@assets/images/wordpress_icon.png";
import gitImg from "@assets/images/git_icon.png";
import nodejsImg from "@assets/images/nodejs_icon.png";
import githubSkillImg from "@assets/images/github_icon.png";
import styles from '@styles/sass/containers/Skills.module.sass';

const Skills = () => {
  return (
    <section className={`${styles.skillsBox} ${styles.container}`}>
      <h2 className={styles.titles}>Skills</h2>
      <div className={styles.skillsHard}>
        <h3>Hard Skills</h3>
        <div className={styles.skill}>
          <HardSkill
            src={htmlImg}
            alt={"html"}
          />
          <HardSkill
            src={cssImg}
            alt={"css"}
          />
          <HardSkill
            src={jsImg}
            alt={"Js"}
          />
          <HardSkill
            src={sassImg}
            alt={"sass"}
          />
          <HardSkill
            src={bootstrapImg}
            alt={"bootstrap"}
          />
          <HardSkill
            src={wordpressImg}
            alt={"WP"}
          />
          <HardSkill
            src={gitImg}
            alt={"git"}
          />
          <HardSkill
            src={nodejsImg}
            alt={"nodejs"}
          />
          <HardSkill
            src={githubSkillImg}
            alt={"github"}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills;