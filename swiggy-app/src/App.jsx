
// import Main from './Main'
// import Footer from './footer'
// import Landing from './landing'
import Mainpage from "./mainpage"
import Aboutus from "./aboutus"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
