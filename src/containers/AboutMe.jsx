import React from 'react';
import Image from 'next/image';
import yoImg from "@assets/images/meImageLowQ.webp";
import styles from '@styles/sass/containers/AboutMe.module.sass';

const AboutMe = () => {

  return (
    <section className={`${styles.meBox} ${styles.container}`}>
      <div className={styles.me}>
        <div className={styles.meImage}>
          <Image src={yoImg} alt={"danibosna"} width="144" height="192" layout="intrinsic"/>
        </div>
        <div className={styles.info}>
          <h2 className={styles.titles}>Me.</h2>
          <p>
            <strong>
            Con una pasion inagotable por la industria Tech, la tecnologia blockchain y la Web3 busco llevar soluciones a ambitos sociales que acarrean con sistemas deficientes. Como Software Dev. busco implementar tecnologias que permitan dar respuestas oportunas y eficientes a cualquier mal que pueda padecer nuestra sociedad.<br />
            Apasionado del Open Source y trabajar con Equipos que expandan nuestra cultura global. Me gusta forjar relaciones sólidas con mis clientes y colaboradores, que luego se convierten en socios, que luego se hacen amigos, porque no hay mayor alegría en lo que hago que ayudar a triunfar a las personas que sueñan en grande, como yo.
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;