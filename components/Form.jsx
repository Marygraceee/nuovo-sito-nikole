import Link from 'next/link'
import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"

const Form = () => {
  return (
 
<section className="bg-sfondi min-h-screen py-16 flex items-start justify-center">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
   

    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4  border-sfondi focus:ring-main focus:border-hover">
              <div>
                <label className="sr-only" htmlFor="name">Nome</label>
                <input
                  className="w-full rounded-lg  border-sfondi focus:ring-main focus:border-hover border-1 outline-none p-3 text-sm "
                  placeholder="Nome"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-lg  border-sfondi focus:ring-main focus:border-hover border-1 outline-none p-3 text-sm"
                    placeholder="Indirizzo email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">Telefono</label>
                  <input
                    className="w-full rounded-lg  border-sfondi focus:ring-main focus:border-hover border-1 outline-none p-3 text-sm"
                    placeholder="Numero di telefono"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Il tuo messaggio</label>
                <textarea
                  className="w-full rounded-lg  border-sfondi focus:ring-main focus:border-hover border-1 outline-none p-3 text-sm"
                  placeholder="Messaggio"
                  rows="8"
                  id="message"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <button
                  type="submit"
                  className="w-full rounded flex justify-center items-center bg-main px-12 py-3 text-sm font-medium text-white shadow hover:bg-hover focus:outline-none focus:ring active:bg-main sm:w-auto"
                >
                  <span className="font-medium"> Invia </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
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