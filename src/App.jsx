//import "./App.css";
//import Button from "./Components/Button/Button";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SideBar from "./Components/SideBar/SideBar";
import MisPlaylistsPage from "./Pages/MisPlaylistsPage/MisPlaylistsPage";
import NavBar from "./Components/NavBar/NavBar";
import ComunidadPage from "./Pages/ComunidadPage/ComunidadPage";
import TuCuentaPage from "./Pages/TuCuentaPage/TuCuentaPage";
//import CrearPlaylist from "./Components/CrearPlaylist/CrearPlaylist";
function App() {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
        <div className="row">
          <div className="col-sm-3 px-0">
            <SideBar />
          </div>
          <div className="col-sm-9">
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route
                path="/mis_playlists"
                element={<MisPlaylistsPage />}
              ></Route>
              <Route path="/comunidad" element={<ComunidadPage />}></Route>
              <Route path="/mi_cuenta" element={<TuCuentaPage />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
