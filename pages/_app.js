import '../styles/globals.css';
import Head from 'next/head';
import Topnav from '../components/Topnav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen">
      <Head />

      <Topnav />

      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
