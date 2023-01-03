import React from 'react';
import Link from 'next/link';
import {
  SiFiverr, SiUpwork, SiMastodon, SiLinkedin,
} from 'react-icons/si';
import textbroker from "../assets/textbroker.svg"

function Social() {
  return (
    <section className="bg-sfondi flex flex-col justify-center items-center py-16">
      <div className="text-center w-full lg:w-1/2 p-5 flex flex-col justify-center items-center gap-16">
        <h2 className="text-main text-2xl font-bold sm:text-3xl">
          Per rendere più flessibile richiedere un servizio, sono presente sulle seguenti piattaforme: socializziamo!
        </h2>
        <div className="lg:text-7xl text-4xl flex justify-center lg:justify-start gap-10">
          <Link className="lg:hover:-translate-y-2 transition duration-200 ease-in-out text-[#0072b1]" href="https://www.linkedin.com/in/nikolececcarelli/"><SiLinkedin /></Link>
          <Link className="lg:hover:-translate-y-2 transition duration-200 ease-in-out text-[#33d433]" href="https://www.upwork.com/freelancers/~01704fba0242b3801c"><SiUpwork /></Link>
          <Link className="lg:hover:-translate-y-2 transition duration-200 ease-in-out text-[#2791da]" href="https://ohai.social/@inbetween"><SiMastodon /></Link>
          <Link className="lg:hover:-translate-y-2 transition duration-200 ease-in-out flex flex-col gap-3 justify-center items-center" href="https://www.textbroker.it/">
            <img src={textbroker.src} alt="" />
            <p className='text-base'>Nickname: <span className="font-bold">Nikole</span></p>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Social;
