import { useState } from "react";
import { Link } from "react-router-dom";

const RecuperarContraseña = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleEnviarClick = () => {
    // Al hacer clic en "Enviar", mostramos el mensaje y ocultamos el formulario.
    setMostrarMensaje(true);
  };

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
        <p>
          <b>
            Recuperación de <br></br> Contraseña
          </b>
        </p>
      </div>

      {mostrarMensaje ? (
        // Si mostrarMensaje es verdadero, muestra el mensaje.
        <div className="text-center">
          <p>Te hemos enviado un mensaje a tu email</p>
        </div>
      ) : (
        // Si mostrarMensaje es falso, muestra el formulario.
        <div>
          <p>
            Pon la dirección de email que usaste para registrarte. Te enviaremos{" "}
            <br></br>un mensaje con tu nombre de usuario y contraseña.
          </p>
          <p>
            <b>Dirección email o nombre de usuario</b>
          </p>
          <div className="container">
            <input type="text" />
          </div>
          <div className="containerButton">
            <button onClick={handleEnviarClick}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecuperarContraseña;
