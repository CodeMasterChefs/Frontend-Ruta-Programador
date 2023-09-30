//import "./App.css";
//import Button from "./Components/Button/Button";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import SideBar from "./Components/SideBar/SideBar";
import MisPlaylistsPage from "./Pages/MisPlaylistsPage/MisPlaylistsPage";
//import CrearPlaylist from "./Components/CrearPlaylist/CrearPlaylist";
function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 px-0">
            <SideBar />
          </div>
          <div className="col-sm-9">
            <Routes>
              <Route path="/home" element={<HomePage></HomePage>}></Route>
              <Route
                path="/mis_playlists"
                element={<MisPlaylistsPage />}
              ></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
