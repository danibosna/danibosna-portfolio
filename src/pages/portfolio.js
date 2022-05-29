import React from 'react';
import Head from 'next/head';
import Projects from '@containers/Projects';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Projects />
    </>
  );
};

export default Portfolio;
