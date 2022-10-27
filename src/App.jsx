import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <Lista name='Task Tracker' />
    </div>
    </>
  )
}

export default App