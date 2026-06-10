import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let [counter, setCountr] = useState(10)

  

  let addValue = () => {
    setCountr(counter + 1)
  }

  let rmvValue = () => {
    setCountr(counter -1)
  }

  return (
    <>
      <h1>Counter value : {counter}</h1>
      <div class="btn">
        <button onClick={addValue}>Add Value</button>
        <br/>
        <button onClick={rmvValue}>Dec Value</button>
      </div>

    </>
  )
}


export default App
