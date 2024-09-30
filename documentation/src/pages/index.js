import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

const Home = () => {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;

  useEffect(() => {
    window.location.href = `/pt/visao-geral`;
  }, [currentLocale]);

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
