import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import { landingUrl } from '../utils/languagePreference.mjs';

const Home = () => {
  useEffect(() => {
    window.location.replace(landingUrl(window, navigator));
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      {}
    </>
  );
};

export default Home;
