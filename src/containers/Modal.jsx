import React from 'react';
import Image from 'next/image';
import yoImg from "@assets/images/BTC.jpg";
import Link from 'next/link';
import MyButton from '@common/MyButton';
import { XCircleIcon } from '@heroicons/react/outline';
import styles from '@styles/sass/containers/Modal.module.sass';

const Modal = ({props}) => {
  const { post } = props;

  return (
    <section className={styles.modalBox}>
      <div className={styles.modal}>
        <Link href="/blog" passHref>
          <MyButton>
            <XCircleIcon className={styles.closeLinkIcon} />
          </MyButton>
        </Link>
        <figure>
          <Image src={yoImg} alt={"danibosna"} layout="intrinsic"/>
        </figure>
        <div className={styles.info}>
          <h2 className={styles.titles}>Me</h2>
          <p>
            <strong>
              {post.article}
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Modal;