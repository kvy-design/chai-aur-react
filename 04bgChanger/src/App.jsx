import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    
    <div className='flex justify-center w-full h-screen' style={{backgroundColor : color}} >

      <div className='bg-white rounded-xl text-amber-50 p-2 mt-120 w-250 flex justify-center h-15'>
        <button className='bg-red-600 m-1 rounded-lg w-20' onClick={()=>{setColor('rgb(231,0,11)')}}>Red</button>
        <button className='bg-green-600 m-1 rounded-lg w-20' onClick={()=>{setColor('rgb(0,166,11)')}}>Green</button>
        <button className='bg-blue-600 m-1 rounded-lg w-20' onClick={()=>{setColor('rgb(23,96,252)')}}>Blue</button>
        <button className='bg-olive-500 m-1 rounded-lg w-20' onClick={()=>{setColor('rgb(124,124,103)')}}>Olive</button>
        <button className='bg-gray-500 m-1 rounded-lg w-20' onClick={()=>{setColor('rgb(104,114,130)')}}>Gray</button>
        <button className='bg-yellow-500 m-1 rounded-lg w-20' onClick={()=>{setColor('rgb(240,177,0)')}}>yellow</button>
        <button className='bg-pink-500 m-1 rounded-lg w-20' onClick={()=>{setColor('rgb(246,51,154)')}}>pink</button>
        <button className='bg-purple-600 m-1 rounded-lg w-20' onClick={()=>{setColor('rgb(152,16,250)')}}>Purple</button>
        <button className='bg-purple-300 text-black m-1 rounded-lg w-20' onClick={()=>{setColor('rgb(218,178,255)')}}>Lavender</button>
        <button className='bg-white text-black m-1 rounded-lg w-20' onClick={()=>{setColor('white')}}>White</button>
        <button className='bg-black m-1 rounded-lg w-20' onClick={()=>{setColor('black')}}>Black</button>
      </div>

    </div>
      
    
  )
}

export default App
