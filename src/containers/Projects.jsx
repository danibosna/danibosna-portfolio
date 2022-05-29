import React from 'react';
import Project from '@components/Project.jsx';
import logo from '@assets/images/danibosna-logo.webp';
import styles from '@styles/sass/containers/Projects.module.sass';

const Projects = () => {
  return (
    <section className={styles.projectsBox}>
      <h2 className={styles.titles}>Portfolio.</h2>
      <ul className={styles.projectsWrapper}>
        <Project
          logo={logo}
          title='DaniBosna'
          info='Creacion y preparacion de contenido para desarrollo de portafolio'
          date='Febrero 2020'
          href='/'
        />
        <Project
          logo={logo}
          title='APV'
          info='Creacion de Administrador de Pacientes de Veterinaria'
          date='Agosto 2020'
          href='https://danibosna-apv.netlify.app/'
        />
      </ul>
    </section>
  )
}

export default Projects;