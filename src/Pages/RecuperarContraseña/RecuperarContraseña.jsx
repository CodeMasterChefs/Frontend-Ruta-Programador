import NavBar from "../../Components/NavBar/NavBar";
import { Link } from "react-router-dom";


const RecuperarContraseña = () => {
  return (
    <div>
        <div className="d-flex inline arrow-button-navbar">
          <button
            className="btn btn-primary"
            onClick={() => window.history.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="4 7 18 18"
              fill="none"
            >
              <path
                d="M26.2499 13.75H8.01742L14.6337 7.13377L12.8662 5.36627L3.23242 15L12.8662 24.6338L14.6337 22.8663L8.01742 16.25H26.2499V13.75Z"
                fill="black"
              />
            </svg>
          </button>
          <Link className="navbar-brand navbar-text-title" to="/">
            La Ruta del Programador
          </Link>
        </div>

      <div className="text-center">
        <p>s
          <b>
            Recuperación de <br></br> Contraseña
          </b>
        </p>
        <p>
          Pon la dirección email que usaste para registrarte. Te enviaremos{" "}
          <br></br>un mensaje con tu nombre de usuario y contraseña.
        </p>
      </div>
      <p>
        <b>Dirección email o nombre de usuario</b>
      </p>
      <div className="container">
        <input type="text" />
      </div>
      <div className="containerButton"> 
      <button>Enviar</button>
      </div>
    </div>
  );
};

RecuperarContraseña.propTypes = {};

export default RecuperarContraseña;
