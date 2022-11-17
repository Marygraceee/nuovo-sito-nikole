import '../styles/globals.css'
import axios from 'axios';
import Topnav from '../components/Topnav';
import Head from 'next/head';


axios.get('http://localhost:1337/api/articles').then(response => {
  console.log(response.data);
});
 

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
   
    </Head>
    
    <Topnav />
    
    <Component {...pageProps} />
    
    </>
  ) 
}

export default MyApp
