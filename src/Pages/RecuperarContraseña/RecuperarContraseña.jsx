import { useState } from "react";
import api from "../../config/site.config";
import { useNavigate } from "react-router-dom";
import "./RecuperarContraseña.css";

const RecuperarContraseña = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState("formulario");
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValue, setEmailValue] = useState(""); // Agregar estado para el valor del email
  const [verificationError, setVerificationError] = useState(null);
  const [verificarPassword, setVerificarPassword] = useState(null);
  const navigate = useNavigate();

  const cambioContraseña = async () => {
    try {
      await api.post("password/cambiar", {
        password: confirmPassword,
        email: emailValue,
      });
      setMostrarMensaje("confirmarGuardado");
      const timer = setTimeout(() => {
        navigate('/iniciar-sesion');
      }, 6000);
      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
      const errorText = error.response.data.errors.password[0];
      setVerificarPassword(errorText);
    }
  };

  const verificarCodigo = async () => {
    const CodeString = verificationCode.join("");
    try {
      await api.post("password/verificar", {
        reset_code: CodeString,
        email: emailValue,
      });
      setMostrarMensaje("confirmarContraseña");
      //setIsAuthenticated(true)
    } catch (error) {
      console.log(error);
      setVerificationError(
        error.response.data.errors
      );
    }
  };

  const volverEnviar = async () => {
    try {
      await api.post("password/solicitar", {
        email: emailValue,
      });
      //console.log("Hola");
    } catch (error) {
      console.log('error');
    }
  };

  const fetchData = async () => {
    let response;
    try {
      response = await api.post("password/solicitar", {
        email: emailValue,
      });

      if (response.status === 200) {
        console.log(response);
        setMostrarMensaje("confirmarCodigo");
      }

    } catch (error) {
      const errorText = error.response.data.errors[0];
      setError({ emailError: errorText });
    }
  };

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
    setVerificationError(null);
    if (mostrarMensaje === "formulario") {
      // Si estamos en la sección de formulario, pasar a la sección de confirmar código.
      fetchData();
    } else if (mostrarMensaje === "confirmarCodigo") {
      // Si estamos en la sección de confirmar código, pasar a la sección de confirmar contraseña.
      verificarCodigo();
    } else if (mostrarMensaje === "confirmarContraseña") {
      // Si estamos en la sección de confirmar contraseña, pasar a la sección de confirmación de guardado.

      if (newPassword === confirmPassword) {
        // Si coinciden, permitir avanzar a la sección de confirmación de guardado
        cambioContraseña();
      } else {
        // Si no coinciden, mostrar un mensaje de error
        setVerificationError(
          "Las contraseñas no coinciden. Por favor, inténtalo de nuevo."
        );
      }
    }

    // Realizar la solicitud POST con el valor del email
  };

  return (
    <div>
      {mostrarMensaje === "confirmarCodigo" && (
        // Seccion de confirmar con codigo de verificacion
        <div>
          <div>
            <div className="text-center">
              <h1><b>Recuperación de <br></br> Contraseña</b></h1>
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
            {verificationError && <p className="code-Error d-flex justify-content-center my-1">{verificationError}</p>}

            <div className="container1 d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEnviarClick}
              >
                Enviar
              </button>
            </div>

            <div className="text-center">
              <p className="my-0"><b>¿Aún no recibiste tu código?</b></p>
              <a href={volverEnviar}><u>Volver a enviar código</u></a>
            </div>
          </div>
        </div>
      )}

      {mostrarMensaje === "confirmarContraseña" && (
        // Seccion de nueva contraseña y confirmar contraseña
        <div className="text-center">
          <h1><b>Recuperación de <br></br> Contraseña</b></h1>
          <div>
            <p className="input-box-newP">Ingresa una nueva contraseña:</p>
            <input
              className="input-box-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <p className="input-box-newPs">Confirma tu contraseña:</p>
            <input
              className="input-box-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {verificationError && <p>{verificationError}</p>}
          {verificarPassword && <p>{verificarPassword}</p>}
          <div className="text-center">
            <button className="btn-primary my-3" onClick={handleEnviarClick}>Confirmar</button>
          </div>
        </div>
      )}

      {mostrarMensaje === "confirmarGuardado" && (
        // Seccion de confirmación de guardado
        <div className="text-center">
          <h1><b>Recuperación de <br></br> Contraseña</b></h1>
          <p>Tu contraseña ha sido modificada y guardada con éxito</p>
        </div>
      )}

      {mostrarMensaje === "formulario" && (
        // Si mostrarMensaje es "formulario", muestra el formulario.
        <div>
          <div className="text-center">
            <h1><b>Recuperación de <br></br> Contraseña</b></h1>
            <p>
              Ingrese la dirección e-mail con la que estas registrado y te
              enviaremos<br></br>un mensaje de verificación para que puedas
              cambiar tu contraseña
            </p>
          </div>
          <p className="d-flex justify-content-center">
            <b>Dirección email o nombre de usuario</b>
          </p>
          <div className="container d-flex justify-content-center">
            <input className="input-box-password"
              type="text"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)} // Manejar cambios en el input
            />
          </div>
          {/* Muestra el mensaje de error debajo del input si existe */}
          {error.emailError && (
            <p className="code-Error d-flex justify-content-center my-1">{error.emailError}</p>
          )}
          <div className="containerButton d-flex justify-content-center">
            <button className="btn-primary my-3" onClick={handleEnviarClick}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecuperarContraseña;
