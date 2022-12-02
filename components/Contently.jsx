/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import contently from '../assets/contently.png';

function Contently() {
  return (
    <section className="bg-sfondi text-dark">
      <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto text-center flex flex-col ">
          <h2 className="text-3xl mx-auto font-bold sm:text-4xl w-full text-center text-main">Dai un'occhiata a qualche mio progetto!</h2>

          <Link
            href="https://nikolececcarelli.contently.com/"
            className="flex w-40 justify-center items-center lg:hover:-translate-y-2 transition duration-300 ease-in-out mx-auto aspect-video"
          >
            <Image className="w-full h-auto" src={contently} alt="contently" />

          </Link>

          <p className="text-lg">
            Richiedi un portfolio più completo tramite messaggio!
            {' '}
            <br />
            Ne ho uno raccolto in questi anni su Drive, con più argomenti e stili.
          </p>

        </div>

        <div className="text-center">
          <Link href="/contatti" className="bg-main text-light mt-10 hover:bg-hover inline-flex items-center justify-center px-12 py-3 text-xl font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Contattami
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contently;
