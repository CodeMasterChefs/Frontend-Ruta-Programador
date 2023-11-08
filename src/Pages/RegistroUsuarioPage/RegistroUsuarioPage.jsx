import { useNavigate } from "react-router-dom";
import "./RegistroUsuarioPage.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react"; // import useState
import CancelarRegistro from "../../Components/ModalRegister/CancelarRegistro";
import PasswordInput from "../../Components/PassworInput/PasswordInput";

const RegistroUsuarioPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const [showPassword, setShowPassword] = useState(false); // INICIAR ESTADO DE MOSTRAR CONTRASEÑA
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // INICIAR ESTADO DE MOSTRAR CONTRASEÑA

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/mis_playlists");
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit((values) => {
    signup(values);
    console.log(values);
  });

  return (
    <div className="container">
      <div className="registro-bg"></div>
      <div className="row">
        <div className="col-md-7 d-flex align-items-center d-flex justify-content-center">
          <div className="registro-title d-flex align-items-center d-flex justify-content-center">
            <h1>
              La Ruta del<br></br>Programador
            </h1>
          </div>
        </div>
        <div className="col-md-5 registro-content">
          <h3>Regístrate</h3>
          <hr className="line-header"></hr>
          <br></br>
          <form onSubmit={onSubmit}>
            <div className="required field ">
              <label className="form-title">Nombre de Usuario *</label>
              <br></br>
              <input
                type="text"
                {...register("username", { required: true })}
                className="input-box"
                placeholder="Ingresar nombre"
              />
              {registerErrors.username && (
                <small>
                  <p className="text-white">{registerErrors.username[0]}</p>
                </small>
              )}
              {errors.username && <p>El nombre de usuario es obligatorio.</p>}
            </div>
            <div className="required field ">
              <label className="form-title">Correo electrónico *</label>
              <br></br>
              <input
                className="input-box"
                {...register("email", { required: true })}
                type="email"
                placeholder="Ingresar correo"
              />
              {registerErrors.email && (
                <small>
                  <p className="text-white">{registerErrors.email[0]}</p>
                </small>
              )}
              {errors.email && <p>El correo electrónico es obligatorio.</p>}
            </div>
            <div className="required field ">
              <label className="form-title">Contraseña *</label>
              <br></br>
              <div style={{ position: "relative" }}>
                <input
                  className="input-box"
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"} // CAMBIAR TIPO DE INPUT
                  placeholder="Ingresar contraseña"
                />
                <button
                className="btn"
                type="button"
                onClick={() => setShowPassword(!showPassword)} // MOSTRAR U OCULTAR CONTRASEÑA
                style={{ cursor: "pointer", position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", color: "black" }} //CAMBIAR COLOR
            >
                {showPassword ?
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 19C12.946 19 13.81 18.897 14.598 18.719L12.841 16.962C12.568 16.983 12.291 17 12 17C6.649 17 4.576 13.154 4.074 12C4.45095 11.1588 4.96005 10.3834 5.582 9.70303L4.184 8.30503C2.646 9.97203 2.063 11.651 2.052 11.684C1.98302 11.8894 1.98302 12.1117 2.052 12.317C2.073 12.383 4.367 19 12 19ZM12 5.00003C10.163 5.00003 8.654 5.39603 7.396 5.98103L3.707 2.29303L2.293 3.70703L20.293 21.707L21.707 20.293L18.388 16.974C21.002 15.023 21.935 12.359 21.949 12.317C22.018 12.1117 22.018 11.8894 21.949 11.684C21.927 11.617 19.633 5.00003 12 5.00003ZM16.972 15.558L14.692 13.278C14.882 12.888 15 12.459 15 12C15 10.359 13.641 9.00003 12 9.00003C11.541 9.00003 11.112 9.11803 10.723 9.30903L8.915 7.50103C9.90752 7.16044 10.9507 6.99103 12 7.00003C17.351 7.00003 19.424 10.846 19.926 12C19.624 12.692 18.76 14.342 16.972 15.558Z" fill="black" />
                    </svg> :
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9C11.206 9.00524 10.4459 9.32299 9.88447 9.88447C9.32299 10.4459 9.00524 11.206 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z" fill="black" />
                        <path d="M12 5C4.367 5 2.073 11.617 2.052 11.684L1.946 12L2.051 12.316C2.073 12.383 4.367 19 12 19C19.633 19 21.927 12.383 21.948 12.316L22.054 12L21.949 11.684C21.927 11.617 19.633 5 12 5ZM12 17C6.649 17 4.576 13.154 4.074 12C4.578 10.842 6.652 7 12 7C17.351 7 19.424 10.846 19.926 12C19.422 13.158 17.348 17 12 17Z" fill="black" />
                    </svg>}
            </button>
              </div>
              {registerErrors.password && (
                <small>
                  <p className="text-white">{registerErrors.password[0]}</p>
                </small>
              )}
              {errors.password && <p>La contraseña es obligatoria.</p>}
              <div data-lastpass-icon-root="true"></div>
            </div>
            <div className="required field ">
              <label className="form-title">Confirmar contraseña *</label>
              <br></br>
              <div style={{ position: "relative" }}>
                <input
                  className="input-box"
                  type={showConfirmPassword ? "text" : "password"} // CAMBIAR TIPO DE INPUT
                  {...register("password_confirmation", { required: true })}
                  placeholder="Ingresar contraseña"
                />
                <button
                className="btn"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} // MOSTRAR U OCULTAR CONTRASEÑA
                style={{ cursor: "pointer", position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", color: "black" }} //CAMBIAR COLOR
            >
                {showConfirmPassword ?
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 19C12.946 19 13.81 18.897 14.598 18.719L12.841 16.962C12.568 16.983 12.291 17 12 17C6.649 17 4.576 13.154 4.074 12C4.45095 11.1588 4.96005 10.3834 5.582 9.70303L4.184 8.30503C2.646 9.97203 2.063 11.651 2.052 11.684C1.98302 11.8894 1.98302 12.1117 2.052 12.317C2.073 12.383 4.367 19 12 19ZM12 5.00003C10.163 5.00003 8.654 5.39603 7.396 5.98103L3.707 2.29303L2.293 3.70703L20.293 21.707L21.707 20.293L18.388 16.974C21.002 15.023 21.935 12.359 21.949 12.317C22.018 12.1117 22.018 11.8894 21.949 11.684C21.927 11.617 19.633 5.00003 12 5.00003ZM16.972 15.558L14.692 13.278C14.882 12.888 15 12.459 15 12C15 10.359 13.641 9.00003 12 9.00003C11.541 9.00003 11.112 9.11803 10.723 9.30903L8.915 7.50103C9.90752 7.16044 10.9507 6.99103 12 7.00003C17.351 7.00003 19.424 10.846 19.926 12C19.624 12.692 18.76 14.342 16.972 15.558Z" fill="black" />
                    </svg> :
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9C11.206 9.00524 10.4459 9.32299 9.88447 9.88447C9.32299 10.4459 9.00524 11.206 9 12C9 13.642 10.358 15 12 15C13.641 15 15 13.642 15 12C15 10.359 13.641 9 12 9Z" fill="black" />
                        <path d="M12 5C4.367 5 2.073 11.617 2.052 11.684L1.946 12L2.051 12.316C2.073 12.383 4.367 19 12 19C19.633 19 21.927 12.383 21.948 12.316L22.054 12L21.949 11.684C21.927 11.617 19.633 5 12 5ZM12 17C6.649 17 4.576 13.154 4.074 12C4.578 10.842 6.652 7 12 7C17.351 7 19.424 10.846 19.926 12C19.422 13.158 17.348 17 12 17Z" fill="black" />
                    </svg>}
            </button>
              </div>
              {registerErrors.password_confirmation && (
                <small>
                  <p className="text-white">
                    {registerErrors.password_confirmation[0]}
                  </p>
                </small>
              )}
              {errors.password_confirmation && (
                <small>
                  <p>Confirmar contraseña es obligatorio.</p>
                </small>
              )}
              <div data-lastpass-icon-root="true"></div>
            </div>
            <br></br>
            <div className="d-flex justify-content-end">
              <CancelarRegistro />
              <button
                type="submit"
                className="btn btn-primary"
                    /* data-bs-toggle="modal"
                       data-bs-target="#modalCrearPlaylist"
                       data-bs-whatever="@mdo" */
                onClick={onSubmit}
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuarioPage;
