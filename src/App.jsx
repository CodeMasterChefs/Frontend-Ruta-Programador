//import "./App.css";
//import Button from "./Components/Button/Button";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SideBar from "./Components/SideBar/SideBar";
//import CrearPlaylist from "./Components/CrearPlaylist/CrearPlaylist";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
      </Routes>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 px-0">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
