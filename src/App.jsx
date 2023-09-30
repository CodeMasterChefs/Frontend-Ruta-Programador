import "./App.css";
import { Aniadir } from "./Components/AniadirElemento/Aniadir";
import { Playlist } from "./Components/NewPlaylist/Playlist";
import { Eliminar } from "./Components/EliminarElemento/Eliminar";

import { useState } from "react";

//import "./App.css";
import Button from "./Components/Button/Button";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CrearPlaylist from "./Components/CrearPlaylist/CrearPlaylist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Aniadir />
      <Playlist />
      <Eliminar />

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Button />
      </div>
      <CrearPlaylist></CrearPlaylist>
    </>
  );
}

export default App;
