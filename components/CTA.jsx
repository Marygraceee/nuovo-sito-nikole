import Link from 'next/link';
import React from 'react';
import sfondo from '../assets/sfondo.jpg';

function CTA() {
  return (
    <section
      style={{ backgroundImage: `url(${sfondo.src})` }}
      className="flex items-center h-screen justify-center lg:bg-fixed bg-center bg-cover bg-image"
    >
      <div className="bg-black/75 w-full h-full flex lg:justify-start lg:text-left text-center justify-center items-center">
        <div className="lg:px-24 px-2 text-light">
          <h1 className="max-w-2xl mb-4 lg:text-6xl text-4xl font-bold lg:leading-[1.15]">“Si legge quello che piace leggere, ma si scrive quello che si è capaci di scrivere.”</h1>
          <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl">
            Editing di libri. Proofreader. Copywriter per blog post, per landing page e siti… ecco perché nascono sempre “lavori nuovi”: sono solo nomi, etichette. Nel mio caso potremmo dire che sono una
            <span className="text-main font-extrabold">“creativa della comunicazione”</span>
            .
          </p>
          <button type="button">
            <Link href="/contatti" className="bg-main hover:bg-hover inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              In cosa ti posso aiutare?
            </Link>
          </button>

        </div>
      </div>
    </section>

  );
}

export default CTA;
