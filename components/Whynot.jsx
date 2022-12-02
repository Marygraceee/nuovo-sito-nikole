import React from 'react';
import Link from 'next/link';
import { BiMoney, BiPencil } from 'react-icons/bi';
import { CgDanger } from 'react-icons/cg';

function Whynot() {
  return (
    <section className="bg-dark text-light">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto text-center flex flex-col gap-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Perché scegliere un creatore di contenuti?</h2>

          <p className=" w-full text-lg text-light">
            Andresti in giro su un’auto con un motore improvvisato?
            Ti fideresti a salire su un aereo mai collaudato prima?

            Se non lo faresti per te, perché farlo con il tuo progetto?
            Affidarsi agli esperti della comunicazione significa avere
            meno ansie, meno problemi e qualcuno che sa &ldquo;smanettare&ldquo;
            per far funzionare ogni cosa, che oggi definiamo generalmente
            &ldquo;copywriter&ldquo;.
            Di contro, lascia che ti chieda una cosa.
          </p>
          <h2 className="mt-8 text-3xl font-bold sm:text-4xl">Perché dovresti NON scegliere un copywriter?</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            className="block rounded-xl bg-sfondi text-dark border border-gray-800 py-8 shadow-xl lg:hover:-translate-y-2 transition duration-300 ease-in-out hover:border-hover"
            href="/servizi"
          >
            <span className="flex flex-col justify-center items-center w-full gap-2">
              <figure className="text-2xl"><BiMoney /></figure>
              <h2 className=" text-2xl font-bold text-dark">&ldquo;Non posso spendere soldi&ldquo;</h2>
            </span>

            <p className="mt-1 text-lg text-dark px-8">
              Non puoi o non vuoi? La scelta è tutta qui: capire quali
              spese sono necessarie e quali non. Hai la certezza che
              non valga la pena investire nella comunicazione OGGI?
            </p>
          </Link>

          <Link
            className="block rounded-xl bg-sfondi text-dark border border-gray-800 py-8 shadow-xl lg:hover:-translate-y-2 transition duration-300 ease-in-out hover:border-hover"
            href="/servizi"
          >

            <span className="flex flex-col justify-center items-center w-full gap-2">
              <figure className="text-2xl"><BiPencil /></figure>
              <h2 className=" text-2xl font-bold text-dark">&ldquo;So scrivere i testi da me&ldquo;</h2>
            </span>

            <p className="mt-1 text-lg text-dark px-8">
              Certo! Il punto è come. Il mio compito è
              ottimizzare ogni parola affinché sia estremamente
              coerente all’obiettivo: cosa ho studiato per anni se potevo limitarmi ad improvvisare?
            </p>
          </Link>

          <Link
            className="block rounded-xl bg-sfondi text-dark border border-gray-800 py-8 shadow-xl lg:hover:-translate-y-2 transition duration-300 ease-in-out hover:border-hover"
            href="/servizi"
          >

            <span className="flex flex-col justify-center items-center w-full gap-2">
              <figure className="text-2xl"><CgDanger /></figure>
              <h2 className=" text-2xl font-bold text-dark">&ldquo;Non mi fido di nessuno&ldquo;</h2>
            </span>

            <p className="mt-1 text-lg text-dark px-8">
              Fai bene! Il mercato è pieno di persone che improvvisano
              e non devi fidarti sulla base del nulla. Guarda il mio
              portfolio, mettimi alla prova. Tu hai bisogno di aiuto
              e io sono qui per questo: aiutare.
            </p>
          </Link>

        </div>

        <div className="text-center">
          <Link href="/contatti" className="bg-main mt-14 text-light hover:bg-hover inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            In cosa ti posso aiutare?
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Whynot;
