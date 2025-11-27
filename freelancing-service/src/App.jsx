import { useState } from 'react'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
