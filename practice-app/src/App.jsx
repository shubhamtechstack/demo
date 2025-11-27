import { useState,useCallback,useEffect } from 'react'
function App() {
 
  //   const [count, setCount] = useState(0);
  // const [calculation, setCalculation] = useState(0);

  // useEffect(() => {
  //   setCalculation(count * 2);
  // }, [count]); // <- add the count variable here

  // return (
  //   <>
  //     <p>Count: {count}</p>
  //     <button onClick={() => setCount((c) => c + 1)}>+</button>
  //     <p>Calculation: {calculation}</p>
  //   </>
  // );
   const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    console.log(name);
    
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <form>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
      </label>
      <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}




export default App
