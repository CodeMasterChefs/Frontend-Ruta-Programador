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
  const [envioEmail, setEnvioEmail] = useState(null);
  const [verificarPassword, setVerificarPassword] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // ICIAR ESTADO DE MOSTRAR CONTRASEÑA
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // INICIAR ESTADO DE MOSTRAR CONTRASEÑA

  const cambioContraseña = async () => {
    try {
      await api.post("password/cambiar", {
        password: confirmPassword,
        email: emailValue,
      });
      setMostrarMensaje("confirmarGuardado");
      const timer = setTimeout(() => {
        navigate("/iniciar-sesion");
      }, 3000);
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
      setVerificationError(error.response.data.errors);
    }
  };

  const volverEnviar = async () => {
    try {
      await api.post("solicitar/codigo", {
        email: emailValue,
      });
      //console.log("Hola");
    } catch (error) {
      const errorText = error.response.data.message;
      setEnvioEmail(errorText);
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
              <h1>
                <b>
                  Recuperación de <br></br> Contraseña
                </b>
              </h1>
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
            {verificationError && (
              <p className="code-Error d-flex justify-content-center my-1">
                {verificationError}
              </p>
            )}

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
              <p className="my-0">
                <b>¿Aún no recibiste tu código?</b>
              </p>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => {
                  volverEnviar();
                  setEnvioEmail(null);
                }}
              >
                Volver a enviar código
              </button>
              <div className="text-center">
                {envioEmail && <p>{envioEmail}</p>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Seccion de nueva contraseña y confirmar contraseña */}
      {mostrarMensaje === "confirmarContraseña" && (
        <div className="d-flex justify-content-center">
          <div  className="recover-conteiner">
            <h1 className="title-recover">Recuperación de Contraseña</h1>
            <div className="d-flex flex-column align-items-start password-container">
              <p className="title-input-box">Ingresa una nueva contraseña:</p>
              <div className="input-box-newP">
                <input
                  className="input-box-password"
                  type={showPassword ? "text" : "password"} //CAMBIAR TIPO DE INPUT
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div
                  style={{
                    position: "absolute",
                    right: 20,
                    transform: "translateY(-50%)",
                    top: "50%",
                  }}
                  onClick={() => setShowPassword(!showPassword)} //MOSTRAR U OCULTAR CONTRASEÑA
                >
                  {showPassword ?
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#b5b5b5"
                    xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M12 9C11.206 9.00524 10.4459 9.32299 9.88447 9.88447C9.32299 10.4459 9.00524 11.206 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z" 
                      fill="#b5b5b5"
                    />
                    <path 
                      d="M12 5C4.367 5 2.073 11.617 2.052 11.684L1.946 12L2.051 12.316C2.073 12.383 4.367 19 12 19C19.633 19 21.927 12.383 21.948 12.316L22.054 12L21.949 11.684C21.927 11.617 19.633 5 12 5ZM12 17C6.649 17 4.576 13.154 4.074 12C4.578 10.842 6.652 7 12 7C17.351 7 19.424 10.846 19.926 12C19.422 13.158 17.348 17 12 17Z" 
                      fill="#b5b5b5"
                    />
                  </svg> :
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#b5b5b5"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 19C12.946 19 13.81 18.897 14.598 18.719L12.841 16.962C12.568 16.983 12.291 17 12 17C6.649 17 4.576 13.154 4.074 12C4.45095 11.1588 4.96005 10.3834 5.582 9.70303L4.184 8.30503C2.646 9.97203 2.063 11.651 2.052 11.684C1.98302 11.8894 1.98302 12.1117 2.052 12.317C2.073 12.383 4.367 19 12 19ZM12 5.00003C10.163 5.00003 8.654 5.39603 7.396 5.98103L3.707 2.29303L2.293 3.70703L20.293 21.707L21.707 20.293L18.388 16.974C21.002 15.023 21.935 12.359 21.949 12.317C22.018 12.1117 22.018 11.8894 21.949 11.684C21.927 11.617 19.633 5.00003 12 5.00003ZM16.972 15.558L14.692 13.278C14.882 12.888 15 12.459 15 12C15 10.359 13.641 9.00003 12 9.00003C11.541 9.00003 11.112 9.11803 10.723 9.30903L8.915 7.50103C9.90752 7.16044 10.9507 6.99103 12 7.00003C17.351 7.00003 19.424 10.846 19.926 12C19.624 12.692 18.76 14.342 16.972 15.558Z"
                        fill="#b5b5b5"
                      />
                    </svg>}
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-start password-container">
              <p className="title-input-box">Confirma tu contraseña:</p>
              <div className="input-box-newP">
                <input
                  className="input-box-password"
                  type={showConfirmPassword ? "text" : "password"} //CAMBIAR TIPO DE INPUT
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  style={{
                    position: "absolute",
                    right: 20,
                    transform: "translateY(-50%)",
                    top: "50%",
                  }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} //MOSTRAR U OCULTAR CONTRASEÑA
                >
                  {showConfirmPassword ?
                    <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#b5b5b5"
                    xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M12 9C11.206 9.00524 10.4459 9.32299 9.88447 9.88447C9.32299 10.4459 9.00524 11.206 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z" 
                      fill="#b5b5b5"
                    />
                    <path 
                      d="M12 5C4.367 5 2.073 11.617 2.052 11.684L1.946 12L2.051 12.316C2.073 12.383 4.367 19 12 19C19.633 19 21.927 12.383 21.948 12.316L22.054 12L21.949 11.684C21.927 11.617 19.633 5 12 5ZM12 17C6.649 17 4.576 13.154 4.074 12C4.578 10.842 6.652 7 12 7C17.351 7 19.424 10.846 19.926 12C19.422 13.158 17.348 17 12 17Z" 
                      fill="#b5b5b5"
                    />
                  </svg> :
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#b5b5b5"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 19C12.946 19 13.81 18.897 14.598 18.719L12.841 16.962C12.568 16.983 12.291 17 12 17C6.649 17 4.576 13.154 4.074 12C4.45095 11.1588 4.96005 10.3834 5.582 9.70303L4.184 8.30503C2.646 9.97203 2.063 11.651 2.052 11.684C1.98302 11.8894 1.98302 12.1117 2.052 12.317C2.073 12.383 4.367 19 12 19ZM12 5.00003C10.163 5.00003 8.654 5.39603 7.396 5.98103L3.707 2.29303L2.293 3.70703L20.293 21.707L21.707 20.293L18.388 16.974C21.002 15.023 21.935 12.359 21.949 12.317C22.018 12.1117 22.018 11.8894 21.949 11.684C21.927 11.617 19.633 5.00003 12 5.00003ZM16.972 15.558L14.692 13.278C14.882 12.888 15 12.459 15 12C15 10.359 13.641 9.00003 12 9.00003C11.541 9.00003 11.112 9.11803 10.723 9.30903L8.915 7.50103C9.90752 7.16044 10.9507 6.99103 12 7.00003C17.351 7.00003 19.424 10.846 19.926 12C19.624 12.692 18.76 14.342 16.972 15.558Z"
                        fill="#b5b5b5"
                      />
                    </svg>}
                </div>
              </div>
            </div>

            {verificationError && <p>{verificationError}</p>}
            {verificarPassword && <p>{verificarPassword}</p>}
            <div className="text-center">
              <button
                className="btn-primary my-3"
                onClick={() => {
                  setVerificarPassword(null);
                  setConfirmPassword(null);
                  handleEnviarClick();
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {mostrarMensaje === "confirmarGuardado" && (
        // Seccion de confirmación de guardado
        <div className="text-center">
          <h1>
            <b>
              Recuperación de <br></br> Contraseña
            </b>
          </h1>
          <p>Tu contraseña ha sido modificada y guardada con éxito</p>
        </div>
      )}

      {mostrarMensaje === "formulario" && (
        // Si mostrarMensaje es "formulario", muestra el formulario.
        <div>
          <div className="text-center">
            <h1>
              <b>
                Recuperación de <br></br> Contraseña
              </b>
            </h1>
            <p>
              Ingrese la dirección e-mail con la que estas registrado y te
              enviaremos<br></br>un mensaje de verificación para que puedas
              cambiar tu contraseña
            </p>
          </div>
          <p className="d-flex justify-content-center">
            <b>Dirección e-mail</b>
          </p>
          <div className="container d-flex justify-content-center">
            <input
              className="input-box-email"
              type="text"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)} // Manejar cambios en el input
            />
          </div>
          {/* Muestra el mensaje de error debajo del input si existe */}
          {error.emailError && (
            <p className="code-Error d-flex justify-content-center my-1">
              {error.emailError}
            </p>
          )}
          <div className="containerButton d-flex justify-content-center">
            <button className="btn-primary my-3" onClick={handleEnviarClick}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecuperarContraseña;