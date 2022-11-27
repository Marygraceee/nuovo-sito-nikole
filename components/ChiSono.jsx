import Image from 'next/image';
import React from 'react';
import portrait from '../assets/portrait.jpg';

function ChiSono() {
  return (
    <section className="min-h-screen bg-light py-16 w-full flex justify-center lg:px-0 px-5">
      <div className="flex lg:flex-row flex-col lg:w-9/12 w-full justify-center items-center gap-5">
        <div className="w-full rounded-full aspect-square bg-cover">
          <Image className="rounded-full aspect-square bg-cover object-cover" alt="Nikole" src={portrait} />
        </div>
        <div className="w-full bg-sfondi aspect-square flex flex-col justify-center lg:items-start items-center p-10 gap-2 shadow-lg">
          <h2 className="text-main text-2xl font-bold sm:text-3xl">
            Mi chiamo Nikole.
          </h2>

          <p className="text-dark">

            Al momento della scrittura ho 30 anni e lavoro come copywriter professionale da 11.
            Sin da quando avevo 12 anni immaginavo di lavorare con le parole, ma al tempo credevo sarei diventata un’autrice strafiga e famosa. In realtà ho cominciato poi a scrivere di cose sempre più tecniche, finché non ho deciso di gettarmi nel mondo del content writing: blog, siti, social, script, libri.

            Ad oggi ho raccolto una quantità impressionante di esperienze e, oltre a essere più cinica e onesta, sono anche fortemente concentrata sull’obiettivo: da me non esiste il servizio “a metà”. Non posso, materialmente, forzarmi a lavorare male. Anche se lo facessi mi sentirei fisicamente male e dovrei stirarmi le dita come Dobby.
          </p>
        </div>
      </div>
    </section>

  );
}

export default ChiSono;
