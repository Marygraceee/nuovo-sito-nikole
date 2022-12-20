import React from 'react';
import Link from 'next/link';

function Blogcard({ article }) {
  return (
    <div className="flex items-center p-4 bg-sfondi border-2 border-gray-200 rounded-lg shadow-sm gap-2">
      <img alt="Immagine articolo" className="lg:block hidden w-64 aspect-video rounded-md border-2 border-gray-300" src={article.imageUrl} />
      <div id="body" className="flex flex-col h-full justify-between p-5">
        <div className="flex flex-col gap-2">
        <Link href={`/${article.slug.current}`} className="text-main hover:text-hover text-xl font-bold sm:text-2xl">
          {article.title}
        </Link>
        <p>{article.description}</p>
        </div>
        
        <div className="flex mt-5">
          <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300" src={article.author.imageUrl} />
          <Link href='/chi-sono' className="ml-3">{article.author.name}</Link>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
