import React from 'react';
import Image from 'next/image';
import MyButton from '@common/MyButton';
import { BookOpenIcon } from '@heroicons/react/outline';
import styles from '@styles/sass/components/Article.module.sass';

const Article = ({ titulo, src, alt, info}) => {

  return (
    <div className={styles.articleCard}>
      <figure>
        <Image src={src} alt={alt} sizes='30vw' layout='responsive' />
      </figure>
      <div className={styles.articleCardDetail}>
        <h3>{titulo}</h3>
        <p>{info}</p>
        <MyButton>
          <BookOpenIcon className={styles.articleLinkIcon} />
        </MyButton>
      </div>
    </div>
  )
}

export default Article;