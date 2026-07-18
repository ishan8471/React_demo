import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

   // ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) string += "0123456789"
    if (charAllowed) string += "!@#$%^&*_+"

    for (let i = 0; i < length; i++) {
      const char = (Math.floor(Math.random() * string.length + 1))
      pass += string.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordonClipboard = useCallback(() => {
    
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)

  },[password])

 useEffect(() => {
  passwordGenerator()

 },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 
    text-orange-500 bg-gray-700 text-center'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input 
        type = "text"
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref = {passwordRef}
        />
        <button 
        onClick={copyPasswordonClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500 active:bg-blue-700'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input
         type="range" 
         min = {8}
         max = {100}
         value = {length}
         className='cursor-pointer'
         onChange={e => {setLength(e.target.value)}}
         />
         <label>Length : {length}</label>
         <div className='flex text-sm '>
        <input 
        type="checkbox"
        defaultChecked = {numberAllowed}
        id = "numberInput"
        onChange={e => {setNumberAllowed((prev) => (!prev))}}
         />
         <label>Numbers</label>
      </div>
         <div className='flex text-sm '>
        <input 
        type="checkbox"
        defaultChecked = {charAllowed}
        id = "charInput"
        onChange={e => {setCharAllowed((prev) => (!prev))}}
         />
         <label>Characters</label>
      </div>
      </div>
      
    </div>
    </>
    
  )
}

export default App