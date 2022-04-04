import React from 'react';
import Experience from '@components/Experience.jsx';
import logo from '@images/logo-danielboscan.png';

const Experiences = () => {
  return (
    <section id="experiences" className="experiences-box container">
      <h2 className="titles">Work Experiences</h2>
      <ul className="experiences-wrapper">
        <Experience
          logo={logo}
          title='DaniBosna'
          info='Creacion y preparacion de contenido para desarrollo de portafolio'
          date='Febrero 2020'
          href='/'
        />
        <Experience
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

export default Experiences;