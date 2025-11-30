// import { useState } from 'react'
import Home from './Home/Home'
// import { Routes,BrwoserRouter,Route } from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import { Route } from 'lucide-react'
import Courses from "./Courses/Courses"
function App() {
  return (
<BrowserRouter>
<Routes>

          <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
</Routes>
</BrowserRouter>

    
   

    
  )

}

export default App
