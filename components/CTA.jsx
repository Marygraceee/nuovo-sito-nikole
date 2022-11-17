import React from 'react'
import sfondo from "../assets/sfondo.jpg"

const CTA = () => {
  return (
    <section
    style={{ backgroundImage: `url(${sfondo.src})` }} 
    class="bg-white h-screen w-full dark:bg-gray-900 bg-cover">
    <div class="bg-black/25 w-full h-full grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="px-24 pb-24 mr-auto place-self-center lg:col-span-7 text-light">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">“Si legge quello che piace leggere, ma si scrive quello che si è capaci di scrivere.”</h1>
            <p class="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl">Editing di libri. Proofreader. Copywriter per blog post, per landing page e siti… ecco perché nascono sempre “lavori nuovi”: sono solo nomi, etichette. Nel mio caso potremmo dire che sono una <span className="text-main font-extrabold">“creativa della comunicazione”</span>.</p>
            <a href="/contatti" class="bg-main hover:bg-hover inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Contattami
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>              
    </div>
</section>

  )
}

export default CTA