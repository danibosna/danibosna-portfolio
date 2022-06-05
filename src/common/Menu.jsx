import React from 'react';
import Link from 'next/link';
import { CodeIcon, UserCircleIcon, ChatIcon, HomeIcon, BriefcaseIcon } from '@heroicons/react/outline';
import MyButton from '@common/MyButton';
import { motion } from 'framer-motion';
import { menuVariants } from '@utils/pageTransitionVars'; 
import styles from '@styles/sass/common/Menu.module.sass';

const Menu = () => {

    return (
        <nav className={`${styles.menu}`}>
                <motion.ul className={styles.navList} initial='initial' animate='animate' variants={menuVariants}>
                    <li>
                        <Link href="/" passHref>
                            <MyButton>
                                <HomeIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref>
                            <MyButton>
                                <UserCircleIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </li>
                    <li>
                        <Link href="/portfolio" passHref>
                            <MyButton>
                                <BriefcaseIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" passHref>
                            <MyButton>
                                <CodeIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts" passHref>
                            <MyButton>
                                <ChatIcon className={styles.i} />
                            </MyButton>
                        </Link>
                    </li>
                </motion.ul>
            </nav>
    );
}

export default Menu;