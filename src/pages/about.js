import React from 'react';
import Head from 'next/head';
import AboutMe from '@containers/AboutMe';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <AboutMe />
    </>
  );
};

export default About;
