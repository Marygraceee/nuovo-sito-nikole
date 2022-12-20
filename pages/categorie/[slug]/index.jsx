import React from 'react'
import groq from 'groq';
import client from '../../../client';
import Blogcard from '../../../components/Blogcard';

const query = groq `*[_type == "post"]{
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
}`;

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const posts = await client.fetch(query);
 

  return {
    props: {
      posts,
      slug,
    },
  };
}



export async function getStaticPaths() {
    return {
        paths: [
          { params: { slug: 'digital-marketing' } },
          { params: { slug: 'tecnologia' } },
          { params: { slug: 'lavoro' } },
          { params: { slug: 'svago' } },
          { params: { slug: 'varie' } },
          { params: { slug: 'finanza-and-fintech' } },
        ],
        fallback: false,
      };
    }

    const index = ({posts, slug}) => {
  
      return (
        <section className="min-h-screen w-full py-16 bg-dark flex flex-col justify-start items-center gap-10">
       <div>
       <div className=" w-full flex justify-center items-center ">
          <h2 className="text-3xl mx-auto font-bold sm:text-4xl pb-8 w-full text-center text-light">Esplora gli articoli</h2>
        </div>
        <div className="grid gap-6 p-5 lg:p-10 md:grid-cols-1 lg:grid-cols-2 ">
        {posts && posts.map((post)=> post.category.slug.current === slug ? <Blogcard key={post.title} article={post} /> : console.log(post))}
        </div>
       </div>
     
    
      </section>
      )
    }
    
    export default index
  