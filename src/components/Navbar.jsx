import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import MenuItems from './MenuItems'

function Navbar() {

  const [active, setActive] = useState(false)

  function showMenu(){
    setActive(!active)
  }



  return (
    <>
    {/* {Mobile} */}
    <header className=' bg-white my-3 mx-2 shadow-md rounded-md'>
    <nav className='  md:hidden w-[95%] mx-auto pt-2'>
      <div className=' flex flex-row items-center justify-between'>
        <img className=" h-16" src="src/Assests/navIcon.avif" alt="" srcset="" />
        <button  onClick={showMenu} ><img className=' z-20 relative mt-[-10px]'  src="src/Assests/Navbar/open-menu.svg" /></button>
        
      </div>
    </nav>
    </header>
    <MenuItems showMenu={showMenu} active={active} />


    {/* {Desktop} */}
    <header className=' sticky top-[0.5rem] z-50 bg-white my-3 mx-2 shadow-md rounded-md md:block hidden'>
    <nav className='   w-[95%] mx-auto pt-2 flex flex-row justify-between items-center'>
      <div className=' flex items-center gap-5'>
        <a href="/"><img href="/" className=" h-16 " src="src/Assests/Navbar/navIcon.avif" alt="" srcset="" /></a>
        <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold text-3xl'>Hiure</span>
      </div> 
      <div className=' flex gap-5'>
        <NavLink to='/about'><a class="nav-link nav-link-ltr">About</a></NavLink>
        <NavLink to='/blog'><a class="nav-link nav-link-ltr">Blog</a></NavLink>
        <NavLink to='/projects'><a class="nav-link nav-link-ltr">Projects</a></NavLink>
        <NavLink to='/contact'><a class="nav-link nav-link-ltr">Contact</a></NavLink>
      </div>
    </nav>
    </header>


    </>
  )
}

export default Navbar