import React from 'react';
import Head from 'next/head';
import Contact from '@containers/Contact.jsx';

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Contact />
    </>
  );
};

export default Contacts;
