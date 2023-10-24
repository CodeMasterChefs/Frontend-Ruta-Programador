import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import MisPlaylistsPage from "./Pages/MisPlaylistsPage/MisPlaylistsPage";
import ComunidadPage from "./Pages/ComunidadPage/ComunidadPage";
import TuCuentaPage from "./Pages/TuCuentaPage/TuCuentaPage";
import MiPlaylist from "./Pages/MiPlaylist/MiPlaylist";
import RegistroUsuarioPage from "./Pages/RegistroUsuarioPage/RegistroUsuarioPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import ConfirmarCodigoPage from "./Pages/ConfimarCodigoPage/ConfirmarCodigoPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage></HomePage>}></Route> */}
          {/* <Route path="/registro" element={<RegistroUsuarioPage />}></Route> */}
          <Route path="/" element={<RegistroUsuarioPage />}></Route>
          <Route path="/iniciar_sesion" element={<LoginPage />}></Route>
          <Route path="/verificar-correo" element={<ConfirmarCodigoPage/>}></Route>
          <Route element={<ProtectedRoute />}>
            <Route
              path="/mis_playlists"
              element={
                <HomePage>
                  <MisPlaylistsPage />
                </HomePage>
              }
            />
            <Route
              path="/mis_playlists/:idPlaylist"
              element={
                <HomePage>
                  <MiPlaylist />
                </HomePage>
              }
            />
            <Route
              path="/comunidad"
              element={
                <HomePage>
                  <ComunidadPage />
                </HomePage>
              }
            />
            <Route
              path="/mi_cuenta"
              element={
                <HomePage>
                  <TuCuentaPage />
                </HomePage>
              }
            />
          </Route>
        </Routes>
        {/* <div className="container-fluid">
        <NavBar />
        <div className="row">
          <div className="col-sm-3 px-0">
            <SideBar />
          </div>
          <div className="col-sm-9">
            <Routes>
              <Route element={<ProtectedRoute/>}>
                <Route path="/mis_playlists" element={<MisPlaylistsPage />} />
                <Route
                  path="/mis_playlists/:idPlaylist"
                  element={<MiPlaylist />}/>
                <Route path="/comunidad" element={<RegistroUsuarioPage />} />
                <Route path="/mi_cuenta" element={<TuCuentaPage />} />
              </Route>
              
            </Routes>
          </div>
        </div>
      </div> */}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
