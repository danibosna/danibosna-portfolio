import React, { Fragment, useState } from 'react';
import Header from '@containers/Header.jsx';
import Specialties from '@containers/Specialties.jsx';
import Experiences from '@containers/Experiences.jsx';
import Skills from '@containers/Skills.jsx';
import Modal from '@containers/Modal.jsx';
import Footer from '@containers/Footer.jsx';
import Main from '../containers/Main.jsx';

const Home = () => {
    // view Modal
    const [meToggle, setMeToggle] = useState(false);
    const viewMeModal = () => {
        setMeToggle(!meToggle);
    }

    return (
        <Fragment>
            <Header
                modalFunct={viewMeModal}
            />
            <Main />
            <Specialties />
            <Experiences />
            <Skills />
            {
                meToggle
                &&
                <Modal
                    modalFunct={viewMeModal}
                />
            }
            <Footer />
        </Fragment>
    );
}

export default Home;