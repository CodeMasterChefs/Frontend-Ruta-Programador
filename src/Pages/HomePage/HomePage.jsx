import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const HomePage = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <div className="container-fluid">
          <NavBar />
          <div className="row">
            <div className="col-sm-3 px-0">
              <SideBar />
            </div>
            <div className="col-sm-9">{children}</div>
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-end">
            <Link to="/iniciar_sesion">
              <button>Iniciar sesión</button>
            </Link>
            <Link to="/registro">
              <button>Registrarse</button>
            </Link>
          </div>
          <p>
            <b>La ruta del programador</b>
          </p>
          <div className="container">
            <div className="content">
              <p>
                En el vasto universo digital, el camino para aquellos que desean
                adentrarse en el fascinante mundo de la programación, cada clic
                es un paso más hacia la maestría en el arte de la programación.
                Con guías detalladas, tutoriales interactivos y una comunidad de
                entusiastas dispuestos a compartir su conocimiento, el
                aprendizaje se convierte en un viaje colaborativo y
                enriquecedor.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
