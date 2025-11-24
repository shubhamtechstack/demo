import { useState,useCallback } from 'react'
import Child from "./Child"
function App() {
  const [count, setCount] = useState(0);


  const hello = useCallback(() => {
    console.log("Hello");
    console.log(hello);
    
  },[]);

  return (
    <>
    <h1>Count={count}</h1>
      <Child fn={hello}/>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}


export default App
