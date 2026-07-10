import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15
  const addValue =  () => {
    // console.log('value added', Math.random());
    // console.log('value added', counter);
    if (counter === 20) {
      counter.setAttribute('disabled');
    }
    // counter = counter + 1 ;
    //setCounter(counter)
    /*  OR */
    setCounter(counter + 1)
    
  }
  const removeValue =  () => {
    // console.log('value added', Math.random());
    // console.log('value added', counter);
    // counter = counter + 1 ;
    //setCounter(counter)
    /*  OR */

    if (counter === 0) {
      counter.setAttribute('disabled');
    }
    setCounter(counter - 1);
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}>Add Value : {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value : {counter}</button>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
