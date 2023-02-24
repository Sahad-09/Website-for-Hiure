import React from 'react'
import colors from 'tailwindcss/colors'

function Contact() {
  return (
    <div className=' rounded-sm shadow-sm  mx-auto bg-white w-[95%] min-h-screen '>
    <div className=' flex justify-center align-middle'>
      <h1 className=' text-center'>For business enquiries: <a className=' text-blue-700' href='mailto:hiure@riseup.net'>hiure@riseup.net</a></h1>
    </div>
    </div>
  )
}

export default Contact
