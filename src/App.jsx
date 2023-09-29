import { useState } from 'react'

import './App.css'
import Button from './Components/Button/Button'
import ButtonRedSocial from './Components/Button/Button'
import { Aniadir } from './Components/AniadirElemento/Aniadir'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aniadir />
    </>
  )
}

export default App
