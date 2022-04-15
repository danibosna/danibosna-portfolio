import React, {useContext} from 'react';
import logo from '@images/logo-danielboscan.png';
import MenuContext from '@context/MenuContex';

const MenuButton = () => {
    const {handleToggle} = useContext(MenuContext);
    return (
        <button type="button" className="box__menu" id="button" onClick={handleToggle}>
            <img src={logo} className="logo-img" />
        </button>
    );
}

export default MenuButton;