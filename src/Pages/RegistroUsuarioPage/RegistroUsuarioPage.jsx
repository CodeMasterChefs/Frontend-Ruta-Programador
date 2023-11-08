import { useNavigate } from "react-router-dom";
import "./RegistroUsuarioPage.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react"; // import useState
import CancelarRegistro from "../../Components/ModalRegister/CancelarRegistro";

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
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPassword(!showPassword)} // MOSTRAR U OCULTAR CONTRASEÑA
                >
                  {showPassword ? "ocultar" : "mostrar"}
                </div>
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
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} // MOSTRAR U OCULTAR CONTRASEÑA
                >
                  {showConfirmPassword ? "ocultar" : "mostrar"}
                </div>
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
                {errors.username && (
                  <p>El nombre de usuario es obligatorio.</p>
                )}
              </div>
                <div className="required field ">
                <label className="form-title">Correo electrónico *</label>
                  <br></br>
                  <input
                    className="input-box"
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Ingresar correo"
                    value={emailValue} // Enlazar el valor del input al estado
                    onChange={(e) => setEmailValue(e.target.value)} // Actualizar el estado
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
                  <input
                    className="input-box"
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Ingresar contraseña"
                  />
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
                  <input
                    className="input-box"
                    type="password"
                    {...register("password_confirmation", { required: true })}
                    placeholder="Ingresar contraseña"
                  />
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
                {/*             {registerErrors.map((error, i) => (<p className="" key={i}>{error}</p>))}
                 */}{" "}
            </form>
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
