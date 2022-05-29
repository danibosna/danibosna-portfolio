import React, {useContext} from 'react';
import Image from 'next/image';
import logo from '@assets/images/danibosna-logo.webp';
import MenuContext from '@context/MenuContext';
import styles from '@styles/sass/components/MenuButton.module.sass';

const MenuButton = () => {
    const {handleToggle} = useContext(MenuContext);
    return (
        <button type="button" className={styles.menuButton} onClick={handleToggle}>
            <Image src={logo} alt="logo" width="49" height="44" layout="intrinsic" />
        </button>
    );
}

export default MenuButton;