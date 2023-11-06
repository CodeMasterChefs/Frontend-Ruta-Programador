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
//import InicioSesionPage from "./Pages/InicioSesionPage/InicioSesionPage";

function App() {
  return (
    <ReproductorPage />
  );
}

export default App;
