import React from 'react';
import Title from '@components/Title.jsx';
import MenuButton from '@components/MenuButton.jsx';
import styles from '@styles/sass/common/Header.module.sass';


const Header = () => {

    return (
        <header className={styles.header}>
            <Title
                title='Dani Bosna'
            />
            <MenuButton/>
        </header>
    );
}

export default Header;