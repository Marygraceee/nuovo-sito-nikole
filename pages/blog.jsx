import React from 'react';
import Blogcard from '../components/Blogcard';
import client from '../client';

export async function getStaticProps() {
  const articles = await client.fetch(
    `*[_type == "post"]{
      title,
      slug,
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

  return {
    props: {
      articles,
    }, // will be passed to the page component as props
  };
}

const blog = ({ articles }) => (

  <section className="min-h-screen w-full py-16 bg-sfondi flex flex-col justify-center items-center">
    <div className=" w-full flex justify-center items-center ">
      <h2 className="text-3xl mx-auto font-bold sm:text-4xl pb-8 w-full text-center">Esplora gli articoli</h2>
    </div>
    <div className="grid gap-6 p-5 lg:p-10 md:grid-cols-1 lg:grid-cols-2 ">
      {articles.map((article) => (
        <Blogcard key={article.title} article={article} />
      ))}
    </div>

  </section>
);

export default blog;
