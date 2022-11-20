import React from 'react'
import Link from 'next/link'
import { SiFiverr, SiUpwork, SiMastodon, SiLinkedin } from "react-icons/si"

const Social = () => {
  return (
    <section className="bg-light flex flex-col justify-center items-center py-16">
        <div className="text-center w-full lg:w-1/2 p-5 flex flex-col justify-center items-center gap-16">
       <h2 className="text-main text-2xl font-bold sm:text-3xl">
       Per rendere più flessibile richiedere un servizio, sono presente sulle seguenti piattaforme: socializziamo!
          </h2>
        <div className="lg:text-7xl text-4xl flex justify-center lg:justify-start gap-10">
            <Link className="lg:hover:-translate-y-2 transition duration-200 ease-in-out" href="https://www.linkedin.com/in/nikolececcarelli/"><SiLinkedin /></Link>
            <Link className="lg:hover:-translate-y-2 transition duration-200 ease-in-out" href="https://www.fiverr.com/nikolehally"><SiFiverr /></Link>
            <Link className="lg:hover:-translate-y-2 transition duration-200 ease-in-out" href="https://www.upwork.com/freelancers/~01704fba0242b3801c"><SiUpwork /></Link>
            <Link className="lg:hover:-translate-y-2 transition duration-200 ease-in-out" href="https://ohai.social/@inbetween"><SiMastodon /></Link>
        </div>

       </div>
    </section>
  )
}

export default Social