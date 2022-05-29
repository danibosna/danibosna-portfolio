import React from 'react';
import Image from 'next/image';
import styles from '@styles/sass/components/HardSkill.module.sass';

const HardSkill = ({src, alt}) => {
  return (
    <div className={styles['hard-skill']}>
      <figure>
        <Image src={src} alt={alt} sizes="100vw" layout="responsive"/>
      </figure>
    </div>
  )
}

export default HardSkill;