import '../styles/globals.css'
import Topnav from '../components/Topnav';
import Head from 'next/head';
import Footer from '../components/Footer';

 

function MyApp({ Component, pageProps }) {

  return (
    <div className="min-h-screen">
    <Head>
   
    </Head>
    
    <Topnav />
    
    <Component {...pageProps} />
    <Footer />
    </div>
  ) 
}

export default MyApp
