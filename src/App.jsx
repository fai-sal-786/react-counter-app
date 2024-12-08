import { useState } from "react"
// import React { useState } from 'react'
// import './index.css'
// import './App.css'

const App = () => {
  const [counter, setCounter] = useState();
  
  const handleIncrease = () => {
    setCounter(counter + 1);
  }
  const handleDecrease = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  }
  const handleReset = () => {
    setCounter(0);
  }
  return (
    <div className='app'>
      <div className='counter-app'>
        <h1>COUNTER-APP</h1>
        <h1>{counter}</h1>
        <button className='btn buttion-1' onClick={handleIncrease}>INCREASE</button>
        <button className='btn buttion-2' onClick={handleDecrease}>DECREASE</button>
        <button className='btn buttion-3' onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default App;
