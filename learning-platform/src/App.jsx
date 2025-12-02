// import { useState } from 'react'
import Home from './Home/Home'
// import { Routes,BrwoserRouter,Route } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Route } from 'lucide-react'
import Courses from "./Courses/Courses"
import Tech from './Tech/Tech'
import Contact from './Contact/Contact'
import ScrollToTop from './ScrollToTop'
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tech" element={<Tech/>} />
           <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>





  )

}

export default App
