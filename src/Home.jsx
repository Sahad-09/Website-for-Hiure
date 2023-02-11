import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className=' md:flex-row flex-col mt-20 gap-3 flex justify-center align-middle mx-auto'>
      <div className=' space-y-6 self-center'>
        <div className=' font-extrabold text-5xl typewriter'>
        <h1>I am Hiure Queiroz</h1>
        </div>
        <p className=' text-2xl'>Developer / Researcher / Physicist</p>
        <NavLink to='/about'><button className=" mt-8 btn btn-outline btn-secondary">About Me</button></NavLink>
      </div>
      <img className=' h-96'  src="src/Assests/main.png"/>
    </div>
    </>

  )
}

export default Home



