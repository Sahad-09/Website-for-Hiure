
import './App.css'
import { BrowserRouter, Route, Routes   } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Projects from './Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'


function App() {

  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/about' element={<About />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}

export default App
