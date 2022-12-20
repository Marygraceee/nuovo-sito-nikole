import React from 'react';
import Blogcard from '../components/Blogcard';
import Categorie from "../components/Categorie"
import client from '../client';

export async function getStaticProps() {
  const articles = await client.fetch(
    `*[_type == "post"]{
      title,
      slug,
      description,
author->{
         name,
         "imageUrl": image.asset->url
          
      },
publishedAt,
"imageUrl": mainImage.asset->url,
      category->{
          title,
          slug
      },
    }`,
  );

  const categories = await client.fetch(
    `*[_type == "category"]{
      title,
      slug
    }`,
  )

  return {
    props: {
      articles,
      categories
    }, // will be passed to the page component as props
  };
}

const blog = ({ articles, categories }) => (

  <section className="min-h-screen w-full py-16 bg-dark flex flex-col justify-center items-center gap-10">
    <div>
    <div className=" w-full flex justify-center items-center ">
      <h2 className="text-3xl mx-auto font-bold sm:text-4xl pb-8 w-full text-center text-light">Categorie</h2>
    </div>
   <ul className="grid lg:grid-cols-3 lg:gap-6 grid-cols-2 gap-2 justify-center items-center">
      {categories.map((category) => (
        <Categorie key={category.title} category={category} />
      ))}
    </ul>
    </div>
   
   <div>
   <div className=" w-full flex justify-center items-center ">
      <h2 className="text-3xl mx-auto font-bold sm:text-4xl pb-8 w-full text-center text-light">Esplora gli articoli</h2>
    </div>
    <div className="grid gap-6 p-5 lg:p-10 md:grid-cols-1 lg:grid-cols-2 ">
      {articles.map((article) => (
        <Blogcard key={article.title} article={article} />
      ))}
    </div>
   </div>
 

  </section>
);

export default blog;
