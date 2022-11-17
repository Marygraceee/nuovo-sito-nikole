import '../styles/globals.css'
import axios from 'axios';
import Topnav from '../components/Topnav';
import Head from 'next/head';



axios.get('http://localhost:1337/api/articles').then(response => {
  console.log(response.data);
});


 

function MyApp({ Component, pageProps }) {

  return (
    <div className="min-h-screen">
    <Head>
   
    </Head>
    
    <Topnav />
    
    <Component {...pageProps} />
    
    </div>
  ) 
}

export default MyApp
