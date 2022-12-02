import '../styles/globals.css';
import React from 'react';
import Topnav from '../components/Topnav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topnav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
