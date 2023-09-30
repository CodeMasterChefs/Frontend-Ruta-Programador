//import "./App.css";
//import Button from "./Components/Button/Button";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CrearPlaylist from "./Components/CrearPlaylist/CrearPlaylist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
      <div className="row">
        <div></div>
      </div>
      <CrearPlaylist></CrearPlaylist>
    </>
  );
}

export default App;
