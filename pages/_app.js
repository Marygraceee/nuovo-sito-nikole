import '../styles/globals.css'
import Topnav from '../components/Topnav';
import Head from 'next/head';
import Footer from '../components/Footer';
import { RealViewportProvider } from "next-real-viewport";

 

function MyApp({ Component, pageProps }) {

  return (
    <div className="min-h-screen">
    <Head>
   
    </Head>
    
    <Topnav />
    
    <RealViewportProvider>
      <Component {...pageProps} />
    </RealViewportProvider>
    <Footer />
    </div>
  ) 
}

export default MyApp
