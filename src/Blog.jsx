import React from 'react'
import { NavLink } from 'react-router-dom'

function Blog() {
  return (
    <div className=' rounded-sm shadow-sm  mx-auto bg-white w-[95%] min-h-screen '>
    <div className=' grid grid-cols-3 gap-5'>
        <div className=" card card-side bg-base-100 shadow-xl flex justify-evenly">
          <figure><img className=' h-[10rem]' src="https://miro.medium.com/max/1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg" alt="Movie"/></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
        <div className=" card card-side bg-base-100 shadow-xl flex justify-evenly">
          <figure><img className=' h-[10rem]' src="https://miro.medium.com/max/1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg" alt="Movie"/></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>

        <div className=" card card-side bg-base-100 shadow-xl flex justify-evenly">
          <figure><img className=' h-[10rem]' src="https://miro.medium.com/max/1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg" alt="Movie"/></figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Blog
