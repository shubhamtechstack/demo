import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef=useRef(null)


  function showlen(e){

    if(e.target.value.length<=10){
       setCount(e.target.value.length)
    }
    else{
      alert("lemgth exceeded")
    }

console.log(e.target.value);

  }
useEffect(()=>{
inputRef.current.focus()
},[])

  return (
   <>
   <input type="text"  ref={inputRef} placeholder="Enter your name " onChange={(e)=>showlen(e)} />
   <h1>Count is: {count}</h1>
     
   </>
  )
}

export default App
