import React from 'react';
import styles from '@styles/sass/containers/Main.module.sass';
import Market from '@components/Market';

const Main = () => {

  return (
    <section className={styles.main}>
      <div id="resultado" className={styles.resultado}>
        <Market />
      </div>
    </section>
  )
}

export default Main;