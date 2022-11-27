import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (

    <section className="bg-sfondi py-16 flex items-start justify-center">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <h2 className="text-3xl mx-auto font-bold sm:text-4xl pb-8 w-full text-center">Vuoi parlarmi del tuo progetto? Usa il form!</h2>
        <div className="flex gap-10 lg:flex-row flex-col items-center justify-center">

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form ref={form} onSubmit={sendEmail} action="" className="space-y-4  border-sfondi focus:ring-main focus:border-hover">
              <div>
                <label className="sr-only" htmlFor="name">Nome</label>
                <input
                  className="w-full rounded-lg  border-sfondi focus:ring-main focus:border-hover border-1 outline-none p-3 text-sm "
                  placeholder="Nome"
                  type="text"
                  id="name"
                  name="user_name"
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
                    name="user_email"
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
                  name="message"
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
              <h2 className="text-main text-2xl font-bold sm:text-3xl">
                Email
              </h2>
              <p className="text-xl">nikolececcarelli@gmail.com</p>
            </div>
            <div>
              <h2 className="text-main text-2xl font-bold sm:text-3xl">
                Cellulare
              </h2>
              <p className="text-xl">
                +39 3884748205
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Form;
