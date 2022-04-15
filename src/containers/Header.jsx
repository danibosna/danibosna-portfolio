import React, {useContext} from 'react';
import Title from '@components/Title.jsx';
import MenuButton from '@components/MenuButton.jsx';
import SocialBox from '@components/SocialBox.jsx';
import Menu from '@components/Menu.jsx';
import MenuContext from '@context/MenuContex.js';


const Header = () => {
    const {toggle} = useContext(MenuContext);

    return (
        <header>
            <div className="header-box">
                <Title
                    title='Dani Bosna'
                    subTitle='Digital Solutions Developer.'
                />
                <MenuButton/>
                <SocialBox
                    GitHub = 'https://github.com/danibosna'
                    Twitter = 'https://twitter.com/danibosna'
                    LinkedIn = 'https://www.linkedin.com/in/danibosna/'
                />
            </div>
            { toggle && <Menu/> }
        </header>
    );
}

export default Header;