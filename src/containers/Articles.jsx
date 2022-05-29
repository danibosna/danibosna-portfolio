import React from 'react';
import Link from 'next/link';
import MyButton from '@common/MyButton';
import Article from '@components/Article';
import chart from '@assets/images/chart.jpg';
import btc from '@assets/images/BTC.jpg';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid';
import styles from '@styles/sass/containers/Articles.module.sass';

const Articles = () => {
  return (
    <section className={`${styles.articlesBox}`}>
      <h2 className={`${styles.title} ${styles.titles}`}>Blog</h2>
      <div className={styles.articles}>
        <Article
          id='1'
          titulo='Cryptos, Tokens y NFT`s'
          src={btc}
          alt={"bitcoin"}
          info='Mas de 10 años de Evolucion en Crypto'
        />
        <Article
          id='2'
          titulo='Analisis Tecnico'
          src={chart}
          alt={"chart"}
          info='la Importancia de una estrategia sin emociones para lograr la consistencia'
        />
      </div>
      <Link href='/blog' passHref>
        <MyButton>
          <ChevronDoubleDownIcon className={styles.articleScrollIcon} />
        </MyButton>
      </Link>
    </section>
  )
}

export default Articles;