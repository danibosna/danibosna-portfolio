import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MyButton from '@common/MyButton';
import { BookOpenIcon } from '@heroicons/react/outline';
import styles from '@styles/sass/components/Article.module.sass';

const Article = ({id, titulo, src, alt, info}) => {
  const router = useRouter();

  return (
    <div className={styles.articleCard}>
      <figure>
        <Image src={src} alt={alt} sizes='30vw' layout='responsive' />
      </figure>
      <div className={styles.articleCardDetail}>
        <h3>{titulo}</h3>
        <p>{info}</p>
        <MyButton onClick={() => {
          router.push({
            pathname: '/blog/post/[id]',
            query: { id : id }
          })
        }}>
          <BookOpenIcon className={styles.articleLinkIcon} />
        </MyButton>
      </div>
    </div>
  )
}

export default Article;