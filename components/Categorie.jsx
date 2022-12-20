import React from 'react'
import Link from 'next/link'

const Categorie = ({category}) => {
  return (
    <Link
            href={`/categorie/${category.slug.current}`}
          >
    <li className="flex flex-1 p-2 text-center lg:h-16 lg:w-64 h-16 w-42 rounded-xl bg-sfondi text-dark border border-gray-800 shadow-xl lg:hover:-translate-y-2 transition duration-300 ease-in-out hover:border-hover">
        
            <span className="flex flex-col justify-center items-center w-full gap-2">
              <h2 className=" lg:text-2xl text-lg font-bold text-dark">&ldquo;{category.title}&ldquo;</h2>
            </span>
          
    </li>
    </Link>
  )
}

export default Categorie