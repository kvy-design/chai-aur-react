import { useState } from 'react'
import './components/Card'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full flex flex-col justify-content justify-center items-center gap-6">
      <h1 className='bg-green-600 text-white align-middle rounded'>Tailwind Css</h1>  
      <Card username="Kavya"/>
      <Card />
      
    </div>
  )
}

export default App


