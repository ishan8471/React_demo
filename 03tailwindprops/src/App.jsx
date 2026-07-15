import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-wrap justify-center '>
    <h1 className='fixed flex flex-wrap justify-center  bottom-20 bg-green-400 text-black-400 p-4 rounded-xl '
    style={{width: 300, alignItems: "center"}}>Tailwind test</h1>
    </div>
  )
}

export default App
