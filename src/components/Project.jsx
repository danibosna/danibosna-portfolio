import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import MyButton from '@common/MyButton';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import styles from '@styles/sass/components/Project.module.sass';

const Project = ({logo, title, info, date, href}) => {

  return (
    <li className={styles.projectCard}>
      <div className={styles.card}>
        <figure>
          <Image src={logo} alt="logo" width='100' height='98' layout="intrinsic"/>
        </figure>
        <h3>{title}</h3>
        <p>
          {info}
          <br />
          <strong>{date}</strong>
        </p>
        <Link href={href} passHref>
          <MyButton target={'_blank'}>
            <ExternalLinkIcon className={styles.projectLinkIcon} />
          </MyButton>
        </Link>
      </div>
    </li>
  )
}

export default Project;