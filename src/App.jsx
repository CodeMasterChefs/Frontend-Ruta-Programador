import './App.css'
import { Aniadir } from './Components/AniadirElemento/Aniadir'
import { Playlist } from './Components/NewPlaylist/Playlist'
import { Eliminar } from './Components/EliminarElemento/Eliminar'


function App() {
  return (
    <>
      <Aniadir />
      <Playlist />
      <Eliminar />

    </>
  )
}

export default App
