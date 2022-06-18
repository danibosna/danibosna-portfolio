import React from 'react';
import Project from '@components/Project.jsx';
import logo from '@assets/images/danibosna-logo-BG.png';
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
          title='CryptoMarket'
          info='Consulta el precio en tiempo real de los tokens del momento'
          date='Septiembre 2020'
          href='https://danibosna-api-criptomarket.netlify.app/'
        />
        <Project
          logo={logo}
          title='APV'
          info='Creacion de Administrador de Pacientes de Veterinaria'
          date='Agosto 2020'
          href='https://danibosna-apv.netlify.app/'
        />
        <Project
          logo={logo}
          title='Buscador de Imagenes'
          info='Buscador de Imagenes de Pixabay'
          date='Enero 2020'
          href='https://danibosna-apv.netlify.app/'
        />
        <Project
          logo={logo}
          title='Buscador de Canciones'
          info='Consulta las letras de tus Clasicos Favoritos'
          date='Marzo 2020'
          href='https://danibosna-canciones.netlify.app/'
        />
        <Project
          logo={logo}
          title='CRM'
          info='Customer Relationship Management'
          date='Abril 2020'
          href='https://danibosna-crm.netlify.app/'
        />
        <Project
          logo={logo}
          title='Calculadora de Gastos'
          info='Determina en que gastas tu presupuesto'
          date='Mayo 2020'
          href='https://danibosna-calculadora-gastos.netlify.app/'
        />
        <Project
          logo={logo}
          title='Estado del Clima'
          info='Consulta el clima en tu ciudad'
          date='Junio 2020'
          href='https://danibosna-api-clima.netlify.app/'
        />
      </ul>
    </section>
  )
}

export default Projects;