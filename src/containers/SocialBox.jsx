import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import github from '@assets/images/github.svg';
import twitter from '@assets/images/twitter.svg';
import linkedin from '@assets/images/linkedin.svg';
import styles from '@styles/sass/containers/SocialBox.module.sass';

const SocialBox = ({GitHub, Twitter, LinkedIn}) => {

    return (
        <nav className={styles.socialBox}>
            <ul>
                <li>
                    <Link href={GitHub} target={'_blank'} rel={'noreferrer'} passHref>
                        <a target='_blank'>
                            <Image src={github} alt="github" width="34" height="34" layout="intrinsic"/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={Twitter} passHref>
                        <a target='_blank'>
                            <Image src={twitter} alt="twitter" width="34" height="34" layout="intrinsic"/>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={LinkedIn} target={'_blank'} rel={'noreferrer'} passHref>
                        <a target='_blank'>
                            <Image src={linkedin} alt="linkedin" width="34" height="34" layout="intrinsic"/>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default SocialBox;