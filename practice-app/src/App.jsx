import { useState,useRef,useEffect } from 'react'
function App() {
 
 
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  console.log(inputValue);
  
console.log(previousInputValue);

  useEffect(() => {
    previousInputValue.current = inputValue;
    // console.log(previousInputValue);
    
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}




export default App
