import React from 'react'
import Link from 'next/link'

const Whynot = () => {
  return (
    <section className="bg-light text-dark">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-lg text-center flex flex-col">
      <h2 className="text-3xl font-bold sm:text-4xl">Perché scegliere un creatore di contenuti?</h2>

      <p className="mt-4 text-dark">
      Andresti in giro su un’auto con un motore improvvisato? Ti fideresti a salire su un aereo mai collaudato prima?

Se non lo faresti per te, perché farlo con il tuo progetto? Affidarsi agli esperti della comunicazione significa avere meno ansie, meno problemi e qualcuno che sa &ldquo;smanettare&ldquo; per far funzionare ogni cosa, che oggi definiamo generalmente &ldquo;copywriter&ldquo;.
Di contro, lascia che ti chieda una cosa.
      </p>
      <h2 className="text-3xl mt-5 font-bold sm:text-4xl">Perché dovresti NON scegliere un copywriter?</h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Link
        className="block rounded-xl border border-gray-800 p-8 shadow-xl lg:hover:-translate-y-2 transition duration-300 ease-in-out hover:border-hover"
        href="/servizi"
      >

        <h2 className=" text-xl font-bold text-dark">&ldquo;Non posso spendere soldi&ldquo;</h2>

        <p className="mt-1 text-sm text-dark">
Non puoi o non vuoi? La scelta è tutta qui: capire quali spese sono necessarie e quali non. Hai la certezza che non valga la pena investire nella comunicazione OGGI?
        </p>
      </Link>

      <Link
        className="block rounded-xl border border-gray-800 p-8 shadow-xl lg:hover:-translate-y-2 transition duration-300 ease-in-out hover:border-hover"
        href="/servizi"
      >

        <h2 className=" text-xl font-bold text-dark">&ldquo;So scrivere i testi da me&ldquo;</h2>

        <p className="mt-1 text-sm text-dark">
Certo! Il punto è come. Il mio compito è ottimizzare ogni parola affinché sia estremamente coerente all’obiettivo: cosa ho studiato per anni se potevo limitarmi ad improvvisare?
        </p>
      </Link>

      <Link
        className="block rounded-xl border border-gray-800 p-8 shadow-xl lg:hover:-translate-y-2 transition duration-300 ease-in-out hover:border-hover"
        href="/servizi"
      >

        <h2 className=" text-xl font-bold text-dark">&ldquo;Non mi fido di nessuno&ldquo;</h2>

        <p className="mt-1 text-sm text-dark">
Fai bene! Il mercato è pieno di persone che improvvisano e non devi fidarti sulla base del nulla. Guarda il mio portfolio, mettimi alla prova. Tu hai bisogno di aiuto e io sono qui per questo: aiutare.
        </p>
      </Link>



    
    </div>

    <div className="text-center">
      <Link
        href="/contatti"
        className="mt-8 inline-flex items-center rounded border border-main hover:border-hover bg-main hover:bg-hover px-8 py-3 text-light focus:outline-none focus:ring active:text-dark"
      >
        <span className="text-sm font-medium">Contattami</span>

      </Link>
    </div>
  </div>
</section>

  )
}

export default Whynot