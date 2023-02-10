import React from 'react'

function MenuItems({showMenu, active}) {
  return (
    <div className={active ? 'md:hidden' : 'hidden'}>
    <ul className='  absolute w-full top-0 bg-[#fff] flex flex-col justify-center items-center gap-5 p-14 text-2xl uppercase'>
      <li className=' border-b-2 border-slate-300'><a href='/about'>About<hr /></a></li>
      <li className=' border-b-2 border-slate-300'><a href='/blog'>Blog<hr /></a></li>
      <li className=' border-b-2 border-slate-300'><a href='/projects'>Projects<hr /></a></li>
      <li className=' border-b-2 border-slate-300'><a href='/contact'>Contact<hr /></a></li>
    </ul>
    </div>
  )
}

export default MenuItems
