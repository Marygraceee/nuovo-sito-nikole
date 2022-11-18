import Image from 'next/image'
import React from 'react'
import portrait from "../assets/portrait.jpg"
import Link from 'next/link'

const ChiSono = () => {
  return (
    <section className="min-h-screen py-20 bg-light">
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="rounded-full relative z-10 lg:py-16">
        <div className="aspect-square mx-auto relative h-64 sm:h-80 lg:h-full">
          <Image
            alt="House"
            src={portrait}
            className="rounded-full absolute inset-0 h-full w-full aspect-square object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-sfondi">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-sfondi"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-main text-2xl font-bold sm:text-3xl">
          Mi chiamo Nikole.
          </h2>

          <p className="mt-4 text-gray-600">
          
Al momento della scrittura ho 30 anni e lavoro come copywriter professionale da 11.
Sin da quando avevo 12 anni immaginavo di lavorare con le parole, ma al tempo credevo sarei diventata un’autrice strafiga e famosa. In realtà ho cominciato poi a scrivere di cose sempre più tecniche, finché non ho deciso di gettarmi nel mondo del content writing: blog, siti, social, script, libri.

Ad oggi ho raccolto una quantità impressionante di esperienze e, oltre a essere più cinica e onesta, sono anche fortemente concentrata sull’obiettivo: da me non esiste il servizio “a metà”. Non posso, materialmente, forzarmi a lavorare male. Anche se lo facessi mi sentirei fisicamente male e dovrei stirarmi le dita come Dobby.
          </p>
          <div className=" text-center">
      <Link
        href="/contatti"
        className="mt-8 inline-flex items-center rounded border border-main hover:border-hover bg-main hover:bg-hover px-8 py-3 text-light focus:outline-none focus:ring active:text-dark"
      >
        <span className="text-sm font-medium">Contattami</span>

      </Link>
    </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ChiSono