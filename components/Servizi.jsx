import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import copy from '../assets/copywriting.jpeg';
import brand from '../assets/brandidentity.jpeg';
import ghost from '../assets/ghost.jpeg';
import social from '../assets/social.jpg';

function Servizi() {
  return (
    <section className="bg-dark min-h-screen flex flex-col items-center gap-5 py-8 w-full lg:px-0 px-5">
      <div className="flex flex-col items-center bg-sfondi border rounded-lg shadow-md md:flex-row lg:w-8/12 w-full p-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className="object-cover rounded-full w-48 aspect-square" src={copy} alt="" />
        <div className="flex flex-col justify-between gap-2 p-4 leading-normal">
          <h2 className="text-main text-2xl font-bold lg:text-left text-center sm:text-3xl">
            Copywriting
          </h2>
          <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
            Testi per blog, articoli, testi per il tuo sito, i tuoi social o
            per le inserzioni del tuo e-commerce! Con una laurea in Arti
            Tecnologiche, più di 10 anni di esperienza e corsi di aggiornamento
            per il SEO copywriting periodici, posso occuparmi di qualsiasi esigenza di scrittura.

            Gli argomenti che ho trattato e che tratto sono davvero moltissimi
            e puoi controllare nei miei portfolio online cosa ho già scritto
            e, se non appare, è probabile che io ne abbia scritto ma non abbia
            più accesso ai documenti. L’unico modo per avere la certezza
            , quindi, è chiedermelo, che è poi una scusa per parlare del
            tuo progetto!
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center bg-sfondi border rounded-lg shadow-md md:flex-row lg:w-8/12 w-full p-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

        <div className="flex flex-col justify-between gap-2 p-4 leading-normal">
          <h2 className="text-main text-2xl font-bold lg:text-left text-center sm:text-3xl">
            Strutturazione brand identity
          </h2>
          <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
            Dopo tanti anni nello scrivere di Digital Marketing e l’aver
            aiutato ormai diverse startup a raggiungere il loro posto
            nel mercato, mi occupo con successo di strutturare brand
            identity e creare un tone of voice, sviluppare uno storytelling
            aziendale, dare le indicazioni per una comunicazione efficace,
            fare ricerche di mercato e stilare i punti essenziali da seguire
            per l’intero team di creativi.

            Ho già gestito gruppi di persone e scegliendomi puoi quindi contare
            su una persona assolutamente professionale, eccellente in ciò che
            la riguarda e un approccio privo di quel carattere tossico che
            contraddistingue i “Professionisti Veri®”. Soddisfatti o rimborsati
            (in Shibacoin o qualche altra valuta morta).
          </p>
        </div>
        <Image className="object-cover rounded-full w-48 aspect-square" src={brand} alt="" />
      </div>

      <div className="flex flex-col items-center bg-sfondi border rounded-lg shadow-md md:flex-row lg:w-8/12 w-full p-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Image className="object-cover rounded-full w-48 aspect-square" src={ghost} alt="" />
        <div className="flex flex-col justify-between gap-2 p-4 leading-normal">
          <h2 className="text-main text-2xl font-bold lg:text-left text-center sm:text-3xl">
            Ghostwriting
          </h2>
          <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
            Dopo alcuni anni di copywriting mi è capitato di
            occuparmi di alcuni libri scritti per altri.
            Inizialmente solo saggi sul digital marketing,
            per poi muovermi al settore delle biografie e
            persino in quella che chiamo “narrativa su
            commissione”: tu mi dai l’idea e io la realizzo.

            Sin da quando ero bambina dicevano che sarei stata
            una “pazza che scriveva libri coi gatti accanto” (cit.)
            e alla fine ti assicuro che qualsiasi cosa leggerai scritta
            in ghost da me sarà esattamente quello che voleva il cliente,
            solo reso molto migliore della loro idea iniziale. Ad oggi
            conto una decina di libri e nessun cliente insoddisfatto.

            Scrivo anche script per i video di Youtube e
            TikTok, cosa che considero appartenente al “ghostwriting”.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center bg-sfondi border rounded-lg shadow-md md:flex-row lg:w-8/12 w-full p-5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

        <div className="flex flex-col justify-between gap-2 p-4 leading-normal">
          <h2 className="text-main text-2xl font-bold lg:text-left text-center sm:text-3xl">
            Social media/Email marketing
          </h2>
          <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
            Non solo i social media hanno bisogno di un copy decente, personalizzato
            in base alla piattaforma di destinazione, ma occorre anche che nel giro
            di 10 parole si riesca a comunicare qualcosa, quello che si vuole, nella
            maniera più efficiente possibile.

            Se è pensiero comune che “chiunque può farlo”, la realtà è che trovare le
            parole giuste per un post sui social riguardo l’importanza delle fettuccine
            artigianali per l’Italia, o un Email per convincere i tuoi compratori a
            fidarsi della tua soluzione “a 360 gradi” non ha niente di facile.
            Il peso di una parola quando hai i secondi di attenzione contati
            è enorme: non ci credi? Prova a guardare quali sono i social più di
            successo e gli email marketer: sai fare quello che fanno loro?
          </p>
        </div>
        <Image className="object-cover rounded-full w-48 aspect-square" src={social} alt="" />
      </div>

      <button type="button">
        <Link href="/contatti" className="bg-main text-light my-6 hover:bg-hover inline-flex items-center justify-center px-5 py-3 text-xl font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Richiedi un servizio
        </Link>
      </button>
    </section>
  );
}

export default Servizi;
