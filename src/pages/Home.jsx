import React, { Fragment, useContext } from 'react';
import Header from '@containers/Header.jsx';
import Specialties from '@containers/Specialties.jsx';
import Experiences from '@containers/Experiences.jsx';
import Skills from '@containers/Skills.jsx';
import Modal from '@containers/Modal.jsx';
import Footer from '@containers/Footer.jsx';
import Main from '../containers/Main.jsx';
import AppContext from '../context/AppContext.js';

const Home = () => {

    const {meToggle} = useContext(AppContext);
    return (
        <Fragment>
            <Header/>
            <Main/>
            <Specialties/>
            <Experiences/>
            <Skills/>
            { meToggle && <Modal/>}
            <Footer />
        </Fragment>
    );
}

export default Home;