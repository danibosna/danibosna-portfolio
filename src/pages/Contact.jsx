import React, { Fragment, useState } from 'react';
import Header from '@containers/Header.jsx';
import ContactSect from '@containers/ContactSect.jsx';
import Modal from '@containers/Modal.jsx';
import Footer from '@containers/Footer.jsx';

const Contact = () => {
  const [meToggle, setMeToggle] = useState(false);
  const viewMeModal = () => {
    setMeToggle(!meToggle);
  }
  return (
    <Fragment>
      <Header
          modalFunct={viewMeModal}
      />
      <ContactSect />
      {
        meToggle
        &&
        <Modal
            modalFunct={viewMeModal}
        />
      }
      <Footer />
    </Fragment>
  )
}

export default Contact;