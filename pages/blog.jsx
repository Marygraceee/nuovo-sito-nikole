import React from 'react'
import axios from 'axios';
import Blogcard from '../components/Blogcard';


export async function getStaticProps(context) {
  const req = await axios.get(`${process.env.PAYLOAD_PUBLIC_BASE_DNS}/api/posts`);
  const articles = req.data.docs
  
  return {
    props: {
 articles
    }, // will be passed to the page component as props
  }
}
 

const blog = ({articles}) => {
  return (
    
    <section className="min-h-screen w-full bg-sfondi flex lg:flex-row flex-col justify-center items-center">
      <div className="bg-red-400 w-full">
        <h2>Categorie:</h2>
      </div>
      <div className="grid grid-cols-2 w-full gap-10 p-10">
     {articles.map((article)=>(
      <Blogcard key={article.id} article={article} /> 
     ))}
      </div>
    
    </section>
  )
}

export default blog