import React from 'react';
import Link from 'next/link'
import styles from '@styles/sass/components/Title.module.sass';

const Title = ({title}) => {
    return (
        <div className={styles.titleBox}>
            <Link href="/" passHref>
                <h1 className={styles.title}>
                    {title}
                </h1>
            </Link>
        </div>
    );
}

export default Title;