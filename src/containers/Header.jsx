import React, {useState} from 'react';
import Title from '@components/Title.jsx';
import MenuButton from '@components/MenuButton.jsx';
import SocialBox from '../components/SocialBox.jsx';
import Menu from '@components/Menu.jsx';

const Header = () => {
    // view Menu
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <header>
            <div className="header-box">
                <Title
                    title='Dani Bosna'
                    subTitle='Digital Solutions Developer.'
                />
                <MenuButton
                    handleToggle={handleToggle}
                />
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