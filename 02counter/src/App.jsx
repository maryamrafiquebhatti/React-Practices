import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State variable for count
  let [count, setCount] = useState(15)

  // Function to add value to count
  const addValue = () => {
    console.log("clicked", count)
    setCount(count + 1)  // Update state using setCount
  }

  return (
    <>
      <h1>chaiii or maryam</h1>
      <h2>{count}</h2> {/* Display the count state */}
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Remove value</button> {/* Remove value */}
    </>
  )
}

export default App
