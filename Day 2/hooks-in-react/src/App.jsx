import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>The count is {count}</div> <br />
      <button onClick={()=>{setCount(count + 1)}}>Increment Count</button> <br /><br />

      <br />
      <button onClick={()=>{setCount(count - 1)}}>Decrement Count</button>
    </>
  )
}

export default App
