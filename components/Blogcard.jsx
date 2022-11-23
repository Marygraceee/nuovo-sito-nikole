import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



const Blogcard = ({article}) => {
  return (
    <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
    <img alt="Immagine articolo" className="lg:block hidden w-56 rounded-md border-2 border-gray-300" src={article.imageUrl} />
     <div id="body" className="flex flex-col ml-5">
     <Link href={`/${article.slug.current}`} className="text-dark hover:text-main text-xl font-bold sm:text-2xl">
         {article.title}
          </Link>
        <p id="job" className="text-gray-800 mt-2">{console.log(article)}</p>
        <div className="flex mt-5">
           <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300" src={article.author.imageUrl} />
           <p className="ml-3">{article.author.name}</p>
        </div>
     </div>
</div>
  )
}

export default Blogcard