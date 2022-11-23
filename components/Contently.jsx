/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import contently from "../assets/contently.png"

const Contently = () => {
  return (
    <section className="bg-sfondi text-dark">
    <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center flex flex-col ">
      <h2 className="text-main text-2xl font-bold sm:text-3xl">
      Dai un'occhiata a qualche mio progetto!
          </h2>

          
        <Link
          href="https://nikolececcarelli.contently.com/"
          className="flex justify-center items-center lg:hover:-translate-y-2 transition duration-300 ease-in-out w-4/12 mx-auto aspect-video"
        >
          <Image className="w-full h-auto" src={contently} alt="contently"/>
  
        </Link>
      
  
        <p>
        Richiedi un portfolio più completo tramite messaggio!
Ne ho uno raccolto in questi anni su Drive, con più argomenti e stili.
        </p>
        
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

export default Contently