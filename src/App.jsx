import { useState } from 'react'

import './App.css'
import Button from './Components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>La Ruta del Programador</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Button/>
      </div>
      
    </>
  )
}

export default App
