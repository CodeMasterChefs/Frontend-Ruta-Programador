import { useState } from 'react'

import './App.css'
import Button from './Components/Button/Button'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
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
