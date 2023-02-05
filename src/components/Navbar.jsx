import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
  <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img className=" h-12 items-center" src="src\Assests\navIcon.avif" alt="" srcset="" />
      <span class="ml-3 text-xl">Hiure</span>
    </a>
    <nav class=" gap-3 md:ml-auto flex  items-center text-base justify-center">
        <NavLink to='/about'><button class="mr-5 hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-md hover:cursor-pointer">About</button></NavLink>
        <NavLink to='/blog'><button class="mr-5 hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-md hover:cursor-pointer">Blog</button></NavLink>
        <NavLink to='/projects'><button class="mr-5 hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-md hover:cursor-pointer">Projects</button></NavLink>
        <NavLink to='/contact'><button class="mr-5 hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-md hover:cursor-pointer">Contact</button></NavLink>
    </nav>
  </div>
  </header>
  )
}

export default Navbar
