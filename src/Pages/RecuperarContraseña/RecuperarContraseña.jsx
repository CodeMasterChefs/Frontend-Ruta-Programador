import { useState } from "react";
import { Link } from "react-router-dom";

const RecuperarContraseña = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState("formulario");
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCodeChange = (index, value) => {
    setError("");
    if (value.length <= 1) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);
    }
  };

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData.getData("text");
    const clipboardChars = clipboardData.replace(/\s+/g, "");
    if (clipboardChars.length === 5) {
      const newVerificationCode = clipboardChars.split("");
      setVerificationCode(newVerificationCode);
    } else {
      setError("El contenido pegado no tiene la longitud correcta.");
    }
  };

  const handleEnviarClick = () => {
    if (mostrarMensaje === "formulario") {
      // Si estamos en la sección de formulario, pasar a la sección de confirmar código.
      setMostrarMensaje("confirmarCodigo");
    } else if (mostrarMensaje === "confirmarCodigo") {
      // Si estamos en la sección de confirmar código, pasar a la sección de confirmar contraseña.
      setMostrarMensaje("confirmarContraseña");
    } else if (mostrarMensaje === "confirmarContraseña") {
      // Si estamos en la sección de confirmar contraseña, pasar a la sección de confirmación de guardado.
      setMostrarMensaje("confirmarGuardado");
    }
  };

  return (
    <div>
      {mostrarMensaje === "confirmarCodigo" && (
        // Seccion de confirmar con codigo de verificacion
        <div>
          <div>
            <div className="text-center">
              <p>
                <b>
                  Recuperación de <br></br> Contraseña
                </b>
              </p>
              <p>
                Te enviamos un código de verificación a tu correo, para que{" "}
                <br></br>puedas cambiar tu contraseña
              </p>
              <p>
                <b>Ingresa el código de verificación:</b>
              </p>
            </div>

            <div className="verification-code-inputs text-center">
              {verificationCode.map((code, index) => (
                <input
                  className="code-inp text-center"
                  key={index}
                  type="text"
                  value={code}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onPaste={handlePaste}
                  maxLength="1"
                />
              ))}
            </div>
            {error && <p>{error}</p>}

            <div className="container1">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEnviarClick}
              >
                Enviar
              </button>
            </div>

            <div className="text-center">
              <p>¿Aún no recibiste tu código?</p>
              <Link>Volver a enviar código</Link>
            </div>
          </div>
        </div>
      )}

      {mostrarMensaje === "confirmarContraseña" && (
        // Seccion de nueva contraseña y confirmar contraseña
        <div className="text-center">
          <p>
            <b>
              Recuperación de <br></br> Contraseña
            </b>
          </p>
          <div>
            <p>Ingresa una nueva contraseña:</p>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <p>Confirma tu contraseña:</p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button onClick={handleEnviarClick}>Confirmar</button>
          </div>
        </div>
      )}

      {mostrarMensaje === "confirmarGuardado" && (
        // Seccion de confirmación de guardado
        <div className="text-center">
          <p>
            <b>
              Recuperación de <br></br> Contraseña
            </b>
          </p>
          <p>Tu contraseña ha sido modificada y guardada con éxito</p>
        </div>
      )}

      {mostrarMensaje === "formulario" && (
        // Si mostrarMensaje es "formulario", muestra el formulario.
        <div>
          <div className="text-center">
            <p>
              <b>
                Recuperación de <br></br> Contraseña
              </b>
            </p>
            <p>
              Ingrese la dirección e-mail con la que estas registrado y te
              enviaremos<br></br>un mensaje de verificación para que puedas
              cambiar tu contraseña
            </p>
          </div>
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
