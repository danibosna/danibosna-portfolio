import React, { Fragment, useContext } from 'react';
import Header from '@containers/Header.jsx';
import ContactSect from '@containers/ContactSect.jsx';
import Modal from '@containers/Modal.jsx';
import Footer from '@containers/Footer.jsx';
import AppContext from '../context/AppContext.js';

const Contact = () => {
  const {meToggle} = useContext(AppContext);
  return (
    <Fragment>
      <Header/>
      <ContactSect/>
      {meToggle && <Modal/>}
      <Footer/>
    </Fragment>
  )
}

export default Contact;