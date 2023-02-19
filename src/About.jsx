import React from 'react'
import ReactMarkdown from 'react-markdown'
// import MARKDOWN from './markdown.md'
import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import MARKDOWN from './markdown.md'

function About() {


  let [ content, setContent] = useState({md: ""});

  useEffect(()=> {
      fetch(MARKDOWN)
          .then((res) => res.text())
          .then((md) => {
              setContent({ md })
          })
  })


  return (
    <>
      <div className=' rounded-sm shadow-sm  mx-auto bg-white w-[95%] min-h-screen '>
        <div className=' mx-5'>
        <img className=' md:mx-auto md:h-96  pt-5 rounded-sm' src="src/Assests/About/monoblaster.jpg" alt="" />  
        <Markdown className=' mt-6' children={content.md}/>
        </div>
      </div>
    </>
  )
}

export default About
