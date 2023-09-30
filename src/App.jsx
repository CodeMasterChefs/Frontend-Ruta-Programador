import { Aniadir } from "./Components/AniadirElemento/Aniadir";
import { Playlist } from "./Components/NewPlaylist/Playlist";
import { Eliminar } from "./Components/EliminarElemento/Eliminar";

//import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Aniadir />
      <Playlist />
      <Eliminar />

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </>
  );
}

export default App;
