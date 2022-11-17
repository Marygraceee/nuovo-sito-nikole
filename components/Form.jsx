import Link from 'next/link'
import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"

const Form = () => {
  return (
 
<section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
   

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Nome</label>
            <input
              className="w-full rounded-lg border-main/50 border-2 p-3 text-sm"
              placeholder="Il tuo nome"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-main/50 border-2 p-3 text-sm"
                placeholder="Indirizzo email"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Cellulare</label>
              <input
                className="w-full rounded-lg border-main/50 border-2 p-3 text-sm"
                placeholder="Numero di telefono"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Il tuo messaggio</label>
            <textarea
              className="w-full rounded-lg border-main/50 border-2 p-3 text-sm"
              placeholder="Messaggio"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-main hover:bg-hover px-5 py-3 text-light sm:w-auto"
            >
              <span className="font-medium"> Invia messaggio </span>

            </button>
          </div>
        </form>
      </div>

      <div className="lg:col-span-2 lg:py-12 text-center lg:text-left">
        <div>
        <h2 className="text-2xl">Email</h2>
       <p className="text-xl">nikolececcarelli@gmail.com</p>
        </div>
       <div>
        <h2 className="text-2xl">Cellulare</h2>
        <p className="text-xl">
        +39 3884748205
        </p>
       </div>
       <div>
        <h2 className="text-2xl">Social</h2>
        <div className="text-2xl flex justify-center lg:justify-start">
            <Link href="https://www.linkedin.com/in/nikolececcarelli/"><AiFillLinkedin /></Link>
        </div>

       </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Form