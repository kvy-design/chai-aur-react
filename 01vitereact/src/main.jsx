import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// task1 : How Actually react unserstand Elements of a function and how it converts in trully


const raectEle = React.createElement(
  'a',
  {
   href: 'htpps://chatgpt.com',
    target: '_blank'
  },
  'click here'
)

const anotherElement = (
  <a href="https://google.com" >Click to get link</a>
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {raectEle}
    anotherElement
  </StrictMode>,
)
