import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi"



const Topnav = () => {
  const [open, setOpen] = useState(false)
  const closeMenu = () => {
    setOpen(false)
  }
  return (
    
<nav className="flex w-full bg-light dark:bg-dark justify-center items-center p-5 sticky top-0 z-50 shadow-xl">
  <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:px-12 lg:gap-0 gap-2 px-2">
    <div className="flex justify-between w-full">
      <Link href='/' className="text-dark dark:text-light text-3xl">Nikole Ceccarelli</Link>
      <button onClick={() => {setOpen(!open)}} className="lg:hidden block"><HiOutlineMenuAlt1 /></button>
    </div>
    <div id="desktopLinks" className="w-full flex justify-end">
      <ul className="hidden lg:flex lg:flex-row gap-5 items-center justify-center">
        <li>
          <Link className="text-dark dark:text-light hover:text-hover text-2xl" href="/chi-sono">Chi sono</Link>
        </li>
        <li>
          <Link className="text-dark dark:text-light hover:text-hover text-2xl" href="/servizi">Servizi</Link>
        </li>
        <li>
          <Link className="text-dark dark:text-light hover:text-hover text-2xl" href="/blog">Blog</Link>
        </li>
        <li>
          <Link className="text-dark dark:text-light hover:text-hover text-2xl" href="/contatti">Contatti</Link>
        </li>
      </ul>
    </div>
    <div id="mobileLinks" className={`${ open ? "flex opacity-1" : "hidden opacity-0"} w-full h-screen lg:hidden transition duration-1000 ease-in-out`}>
    <ul className="w-full flex justify-start gap-5 items-start flex-col p-2">
        <li>
          <Link onClick={closeMenu} className="text-dark dark:text-light hover:text-hover text-2xl" href="/chi-sono">Chi sono</Link>
        </li>
        <li>
          <Link onClick={closeMenu} className="text-dark dark:text-light hover:text-hover text-2xl" href="/servizi">Servizi</Link>
        </li>
        <li>
          <Link onClick={closeMenu} className="text-dark dark:text-light hover:text-hover text-2xl" href="/blog">Blog</Link>
        </li>
        <li>
          <Link onClick={closeMenu} className="text-dark dark:text-light hover:text-hover text-2xl" href="/contatti">Contatti</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Topnav