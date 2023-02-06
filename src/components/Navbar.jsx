import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    {/* {Mobile} */}
    <nav className=' md:hidden w-[95%] mx-auto pt-2'>
      <div className=' flex flex-row items-center justify-between'>
        <img className=" h-16" src="src\Assests\navIcon.avif" alt="" srcset="" />
        <img className=' relative mt-[-10px]'  src="src/Assests/menu-icon.svg" />
      </div>
    </nav>
    {/* {Desktop} */}
    <header className=' md:block hidden'>
    <nav className='w-[95%] mx-auto pt-2 flex flex-row justify-between items-center'>
      <div className=' flex items-center gap-5'>
        <img className=" h-16 " src="src\Assests\navIcon.avif" alt="" srcset="" />
        <span>Hiure</span>
      </div> 
      <div className=' flex gap-5'>
        <NavLink to='/about'><a><button className="btn btn-active btn-ghost">About</button></a></NavLink>
        <NavLink to='/blog'><a><button className="btn btn-active btn-ghost">Blog</button></a></NavLink>
        <NavLink to='/projects'><a><button className="btn btn-active btn-ghost">Projects</button></a></NavLink>
        <NavLink to='/contact'><a><button className="btn btn-active btn-ghost">Conatct</button></a></NavLink>
      </div>
    </nav>
    </header>

    </>
  )
}

export default Navbar


{/* <img className=" h-12 items-center" src="src\Assests\navIcon.avif" alt="" srcset="" />
<span class=" hidden ml-3 text-xl">Hiure</span>
<img src="src/Assests/menu-icon.svg" alt="" className=' ' /> */}