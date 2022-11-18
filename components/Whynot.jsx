import React from 'react'
import Link from 'next/link'

const Whynot = () => {
  return (
    <section class="bg-light text-dark">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center flex flex-col">
      <h2 class="text-3xl font-bold sm:text-4xl">Perché scegliere un creatore di contenuti?</h2>

      <p class="mt-4 text-dark">
      Andresti in giro su un’auto con un motore improvvisato? Ti fideresti a salire su un aereo mai collaudato prima?

Se non lo faresti per te, perché farlo con il tuo progetto? Affidarsi agli esperti della comunicazione significa avere meno ansie, meno problemi e qualcuno che sa “smanettare” per far funzionare ogni cosa, che oggi definiamo generalmente "copywriter".
Di contro, lascia che ti chieda una cosa.
      </p>
      <h2 class="text-3xl mt-5 font-bold sm:text-4xl">Perché dovresti NON scegliere un copywriter?</h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Link
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-hover"
        href="/servizi"
      >

        <h2 class="mt-4 text-xl font-bold text-dark">"Non posso spendere soldi"</h2>

        <p class="mt-1 text-sm text-dark">
Non puoi o non vuoi? La scelta è tutta qui: capire quali spese sono necessarie e quali non. Hai la certezza che non valga la pena investire nella comunicazione OGGI?
        </p>
      </Link>

      <Link
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-hover"
        href="/servizi"
      >

        <h2 class="mt-4 text-xl font-bold text-dark">"So scrivere i testi da me"</h2>

        <p class="mt-1 text-sm text-dark">
Certo! Il punto è come. Il mio compito è ottimizzare ogni parola affinché sia estremamente coerente all’obiettivo: cosa ho studiato per anni se potevo limitarmi ad improvvisare?
        </p>
      </Link>

      <Link
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-hover"
        href="/servizi"
      >

        <h2 class="mt-4 text-xl font-bold text-dark">"Non mi fido di nessuno"</h2>

        <p class="mt-1 text-sm text-dark">
Fai bene! Il mercato è pieno di persone che improvvisano e non devi fidarti sulla base del nulla. Guarda il mio portfolio, mettimi alla prova. Tu hai bisogno di aiuto e io sono qui per questo: aiutare.
        </p>
      </Link>



    
    </div>

    <div class="text-center">
      <Link
        href="/contatti"
        class="mt-8 inline-flex items-center rounded border border-main hover:border-hover bg-main hover:bg-hover px-8 py-3 text-light focus:outline-none focus:ring active:text-dark"
      >
        <span class="text-sm font-medium">Contattami</span>

      </Link>
    </div>
  </div>
</section>

  )
}

export default Whynot