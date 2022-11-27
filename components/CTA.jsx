import Link from 'next/link'
import React from 'react'
import sfondo from "../assets/sfondo.jpg"






const CTA = () => {

  
  return (
    <section
    style={{ backgroundImage: `url(${sfondo.src})`}} 
    className={`flex items-center h-full justify-center lg:bg-fixed bg-center bg-cover bg-image`}>
    <div className={`bg-black/75 w-full h-full flex lg:justify-start lg:text-left text-center justify-center items-center`}>
        <div className="lg:px-24 px-2 text-light">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">“Si legge quello che piace leggere, ma si scrive quello che si è capaci di scrivere.”</h1>
            <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl">Editing di libri. Proofreader. Copywriter per blog post, per landing page e siti… ecco perché nascono sempre “lavori nuovi”: sono solo nomi, etichette. Nel mio caso potremmo dire che sono una <span className="text-main font-extrabold">“creativa della comunicazione”</span>.</p>
            <Link href="/contatti" className="bg-main hover:bg-hover inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Contattami
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
        </div>              
    </div>
</section>

  )
}

export default CTA