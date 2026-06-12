import { useState,useCallback,useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed ] = useState(false)
  const [password , setPassword] = useState("")

  const paswdRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pwd = ""

    if (charAllowed) str += "+_-()*&^%$#@!~`{}\?/<>.:';"
    if (numAllowed) str += "0123456789"
    for(let i=1;i <= len ; i ++){

      let index = Math.floor(Math.random() * str.length)
      pwd = pwd + str.charAt(index)
    }

    setPassword(pwd)

  },[len,charAllowed,numAllowed,setPassword])
  
  const copyPawd = useCallback(()=>{
    paswdRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
    console.log("useeffect")
  },[len,numAllowed,charAllowed,setPassword])
  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-700 bg-gray-900'>
        <h1 className='text-white text-center text-xl font-bold mb-4'>Password Generator</h1>
        <div className=' w-full flex rounded-lg overflow-hidden mb-4 bg-white text-black'>
          <input 
            className='w-full outline-hidden rounded-l px-3 py-2 bg-white my-2 h-6'
            type='text'
            value={password}
            placeholder='password'
            readOnly
            ref={paswdRef}
          />

          <button
          onClick={copyPawd}
          className=' outline-none bg-blue-700 text-white px-4 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex test-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value= {len}
            className='cursor-pointer'
            onChange={(e) =>{setLen(e.target.value)}}
            />
            <label>Length : {len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="Checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumAllowed((prev) => !prev);
            }}/>
            <label>
              numbers
            </label>

            <input type="Checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev) => !prev);
            }}/>
            <label>
              Characters
            </label>

          </div>
        </div>


      </div>
  )
}

export default App
