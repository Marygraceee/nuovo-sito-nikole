import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi"

const Topnav = () => {
  const [open, setOpen] = useState(false)
  return (
    
<nav className="flex w-full bg-light dark:bg-dark justify-center items-center p-5 sticky top-0 z-50 shadow-xl">
  <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:px-12 px-2">
    <div className="flex justify-between w-full">
      <Link href='/' className="text-dark dark:text-light">Nikole Ceccarelli</Link>
      <button onClick={() => {setOpen(!open)}} className="lg:hidden block"><HiOutlineMenuAlt1 /></button>
    </div>
    <div id="desktopLinks" className="w-full flex justify-end">
      <ul className="hidden lg:flex lg:flex-row gap-5 items-center justify-center">
        <li>
          <Link className="text-dark dark:text-light hover:text-hover" href="/chi-sono">Chi sono</Link>
        </li>
        <li>
          <Link className="text-dark dark:text-light hover:text-hover" href="/servizi">Servizi</Link>
        </li>
        <li>
          <Link className="text-dark dark:text-light hover:text-hover" href="/blog">Blog</Link>
        </li>
        <li>
          <Link className="text-dark dark:text-light hover:text-hover" href="/contatti">Contatti</Link>
        </li>
      </ul>
    </div>
    <div id="mobileLinks" className={`${ open ? "flex" : "hidden"} w-full h-fit lg:hidden`}>
    <ul className="w-full flex justify-start gap-2 items-center flex-col p-2">
        <li>
          <Link className="text-dark dark:text-light hover:text-hover" href="/chi-sono">Chi sono</Link>
        </li>
        <li>
          <Link className="text-dark dark:text-light hover:text-hover" href="/servizi">Servizi</Link>
        </li>
        <li>
          <Link className="text-dark dark:text-light hover:text-hover" href="/blog">Blog</Link>
        </li>
        <li>
          <Link className="text-dark dark:text-light hover:text-hover" href="/contatti">Contatti</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Topnav