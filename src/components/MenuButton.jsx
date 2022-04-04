import React from 'react';
import logo from '@images/logo-danielboscan.png';

const MenuButton = ({handleToggle}) => {
    return (
        <button type="button" className="box__menu" id="button" onClick={handleToggle}>
            <img src={logo} className="logo-img" />
        </button>
    );
}

export default MenuButton;