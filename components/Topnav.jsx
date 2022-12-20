import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from "../assets/LogoNi.png"

function Topnav() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };

  const [trasparente, setTrasparente] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState('');

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (clientWindowHeight > 0) {
      setTrasparente(true);
    } else {
      setTrasparente(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [clientWindowHeight]);

  return (

    <nav className={`flex w-full bg-black justify-center items-center p-2 sticky top-0 z-50 shadow-xl ${trasparente ? ' bg-opacity-70' : 'bg-opacity-100'} transition duration-300 ease-in-out backdrop-blur-sm `}>
      <div className="flex w-full justify-between flex-col lg:flex-row lg:px-10 px-2">
        <div className="flex justify-between w-full items-center h-full">
          <Link href="/" className="text-light transition duration-300 ease-in-out"><img className="w-64 lg:w-80" src={Logo.src} alt="" /></Link>
          <button onClick={() => { setOpen(!open); }} className=" text-2xl lg:hidden block text-light">{open ? <AiOutlineClose /> : <HiOutlineMenuAlt1 />}</button>
        </div>
        <div id="desktopLinks" className="w-full flex justify-end">
          <ul className="hidden lg:flex lg:flex-row gap-12 items-center justify-center">
            <li>
              <Link className=" text-xl text-light hover:text-hover transition duration-300 ease-in-out" href="/chi-sono">Chi sono</Link>
            </li>
            <li>
              <Link className=" text-xl text-light hover:text-hover transition duration-300 ease-in-out" href="/servizi">Servizi</Link>
            </li>
            <li>
              <Link className=" text-xl text-light hover:text-hover transition duration-300 ease-in-out" href="/blog">Blog</Link>
            </li>
            <li>
              <Link className=" text-xl text-light hover:text-hover transition duration-300 ease-in-out" href="/contatti">Contatti</Link>
            </li>
          </ul>
        </div>
        <div id="mobileLinks" className={`${open ? 'flex opacity-1' : 'hidden opacity-0'} w-full h-fit pt-2 lg:hidden transition duration-1000 ease-in-out`}>
          <ul className="w-full flex justify-start gap-5 items-start flex-col p-2">
            <li>
              <Link onClick={closeMenu} className=" text-xl text-light hover:text-hover transition duration-300 ease-in-out" href="/chi-sono">Chi sono</Link>
            </li>
            <li>
              <Link onClick={closeMenu} className=" text-xl text-light hover:text-hover transition duration-300 ease-in-out" href="/servizi">Servizi</Link>
            </li>
            <li>
              <Link onClick={closeMenu} className=" text-xl text-light hover:text-hover transition duration-300 ease-in-out" href="/blog">Blog</Link>
            </li>
            <li>
              <Link onClick={closeMenu} className=" text-xl text-light hover:text-hover transition duration-300 ease-in-out" href="/contatti">Contatti</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>

  );
}

export default Topnav;
