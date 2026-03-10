import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
 <>

 <div className='h-screen bg-grey700 text-white'>
<Navbar/>
 </div>

 
 </>
  )
}

export default App
