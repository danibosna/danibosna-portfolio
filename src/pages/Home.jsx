import React, { Fragment, useContext } from 'react';
import Header from '@containers/Header.jsx';
import Specialties from '@containers/Specialties.jsx';
import Experiences from '@containers/Experiences.jsx';
import Skills from '@containers/Skills.jsx';
import Modal from '@containers/Modal.jsx';
import Footer from '@containers/Footer.jsx';
import Main from '@containers/Main.jsx';
import ModalContext from '@context/ModalContext.js';
import MyOrder from '@templates/MyOrder.jsx';
import ShoppingCartContext from '@context/ShoppingCartContext.js';

const Home = () => {
    const {toggleOrders} = useContext(ShoppingCartContext);
    const {meToggle} = useContext(ModalContext);
    return (
        <Fragment>
            <Header/>
            <Main/>
            { toggleOrders && <MyOrder/> }
            <Specialties/>
            <Experiences/>
            <Skills/>
            <Footer />
            { meToggle && <Modal/> }
        </Fragment>
    );
}

export default Home;