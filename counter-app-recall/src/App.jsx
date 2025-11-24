
import { useState } from 'react';
import './App.css'

function App() {
  const [num,setIncrement]=useState(15);
  // let num=15;
const increment=()=>{
  if(num<20)setIncrement(num+1);
}
const decrement=()=>{
  if(num>15) setIncrement(num-1)
}

  return (
    <>
    <h2>Counter App</h2>
    <p onClick={increment}>{num}</p>
    <button onClick={increment}>click here {num}</button>
<button onClick={decrement}>decrement:{num}</button>
    </>
  )
}

export default App
