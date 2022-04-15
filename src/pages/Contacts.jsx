import React, { Fragment, useContext } from 'react';
import Header from '@containers/Header.jsx';
import ContactSect from '@containers/Contact.jsx';
import Modal from '@containers/Modal.jsx';
import Footer from '@containers/Footer.jsx';
import ModalContext from '@context/ModalContext.js';

const Contacts = () => {
  const {meToggle} = useContext(ModalContext);
  return (
    <Fragment>
      <Header/>
      <ContactSect/>
      {meToggle && <Modal/>}
      <Footer/>
    </Fragment>
  )
}

export default Contacts;