import React from 'react';
import Project from '@components/Project.jsx';
import logo from '@assets/images/danibosna-logo-BG.png';
import ecommerceLogo from '@assets/images/cart_market_store_ecommerce_icon_178867.png';
import coin from '@assets/images/bitcoin.svg';
import petImg from '@assets/images/pet_animal_document_history_paper_icon_124630.png';
import imgSearch from '@assets/images/photo-photography-image-picture-folder_108645.png';
import musicFolder from '@assets/images/folder_music_15511.png';
import fileImg from '@assets/images/businessapplication_distributor_report_document_negocio_2319.png';
import calculatorImg from '@assets/images/calculator_coin_dollar_money_icon_127186.png';
import weatherImg from '@assets/images/weather-forcast-storm-rain-thunder-day_108615.png';
import styles from '@styles/sass/containers/Projects.module.sass';

const Projects = () => {
  return (
    <section className={styles.projectsBox}>
      <h2 className={styles.titles}>Portfolio.</h2>
      <ul className={styles.projectsWrapper}>
        <Project
          logo={ecommerceLogo}
          title='Ecommerce'
          info='Clon EduCommerce'
          date='Noviembre 2020'
          href='https://danibosna-ecommerce.netlify.app/'
        />
        <Project
          logo={coin}
          title='CryptoMarket'
          info='Consulta el precio en tiempo real de los tokens del momento'
          date='Septiembre 2020'
          href='https://danibosna-api-criptomarket.netlify.app/'
        />
        <Project
          logo={petImg}
          title='APV'
          info='Creacion de Administrador de Pacientes de Veterinaria'
          date='Agosto 2020'
          href='https://danibosna-apv.netlify.app/'
        />
        <Project
          logo={imgSearch}
          title='Buscador de Imagenes'
          info='Buscador de Imagenes de Pixabay'
          date='Enero 2020'
          href='https://danibosna-api-pixabay.netlify.app/'
        />
        <Project
          logo={musicFolder}
          title='Buscador de Canciones'
          info='Consulta las letras de tus Clasicos Favoritos'
          date='Marzo 2020'
          href='https://danibosna-canciones.netlify.app/'
        />
        <Project
          logo={fileImg}
          title='CRM'
          info='Customer Relationship Management'
          date='Abril 2020'
          href='https://danibosna-crm.netlify.app/'
        />
        <Project
          logo={calculatorImg}
          title='Calculadora de Gastos'
          info='Determina en que gastas tu presupuesto'
          date='Mayo 2020'
          href='https://danibosna-calculadora-gastos.netlify.app/'
        />
        <Project
          logo={weatherImg}
          title='Estado del Clima'
          info='Consulta el clima en tu ciudad'
          date='Junio 2020'
          href='https://danibosna-api-clima.netlify.app/'
        />
        <Project
          logo={logo}
          title='DaniBosna'
          info='Creacion y preparacion de contenido para desarrollo de portafolio'
          date='Febrero 2020'
          href='/'
        />
      </ul>
    </section>
  )
}

export default Projects;