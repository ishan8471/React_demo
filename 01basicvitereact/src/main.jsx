import React from 'react';
// import React, { StrictMode } from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(<div>
//     <h1>
//       HEllo woRLD 
//     </h1>
//   </div>
//   )
// }

// const anotherElement = (
//   <a href="https://google.com" target = '_blank'>Visit Google</a>
// )

const aanotherElment = "Chai aur code"

const ReactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'Click me to visit Google',
  aanotherElment
)

createRoot(document.getElementById('root')).render(

  ReactElement

  // <StrictMode>
  //   {ReactElement}
  //  </StrictMode>
    //anotherElement
    // <MyApp />
    //App()
  

 
)
