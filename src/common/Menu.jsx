import React from 'react';
import Link from 'next/link';
import { CodeIcon, UserCircleIcon, ChatIcon, HomeIcon, BriefcaseIcon } from '@heroicons/react/outline';
import MyButton from '@common/MyButton';
import { m } from 'framer-motion';
import { menuAnimationVariant, itemsAnimationVariant } from '@utils/pageTransitionVars';
import styles from '@styles/sass/common/Menu.module.sass';

const Menu = () => {

    return (
        <nav className={`${styles.menu}`}>
                <m.ul className={styles.navList} initial='initial' animate='animate' variants={menuAnimationVariant}>
                    <m.li initial='initial' animate='animate' variants={itemsAnimationVariant}>
                        <Link href="/" passHref>
                            <MyButton>
                                <HomeIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </m.li>
                    <m.li initial='initial' animate='animate' variants={itemsAnimationVariant}>
                        <Link href="/about" passHref>
                            <MyButton>
                                <UserCircleIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </m.li>
                    <m.li initial='initial' animate='animate' variants={itemsAnimationVariant}>
                        <Link href="/portfolio" passHref>
                            <MyButton>
                                <BriefcaseIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </m.li>
                    <m.li initial='initial' animate='animate' variants={itemsAnimationVariant}>
                        <Link href="/blog" passHref>
                            <MyButton>
                                <CodeIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </m.li>
                    <m.li initial='initial' animate='animate' variants={itemsAnimationVariant}>
                        <Link href="/contacts" passHref>
                            <MyButton>
                                <ChatIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </m.li>
                </m.ul>
            </nav>
    );
}

export default Menu;