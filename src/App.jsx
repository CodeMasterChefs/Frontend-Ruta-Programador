import './App.css';
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
import RecuperarContraseña from "./Pages/RecuperarContraseña/RecuperarContraseña";
import ReproductorPage from "./Pages/ReproductorPage/ReproductorPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/registro" element={<RegistroUsuarioPage />}></Route>
          <Route path="/iniciar-sesion" element={<LoginPage />}></Route>
          <Route
            path="/verificar-correo"
            element={<ConfirmarCodigoPage />}
          ></Route>
          <Route
            path="/recuperar_contraseña"
            element={<RecuperarContraseña />}
          ></Route>
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
            <Route
              path="/mis_playlists/:idPlaylist/reproducir"
              element={
                <ReproductorPage />
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
