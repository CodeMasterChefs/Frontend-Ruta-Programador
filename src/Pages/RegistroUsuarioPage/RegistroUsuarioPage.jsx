import { useNavigate } from "react-router-dom";
import "./RegistroUsuarioPage.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import CancelarRegistro from "../../Components/ModalRegister/CancelarRegistro";
import svgAstronautra from "../../assets/Image.svg";

const RegistroUsuarioPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

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
        <div className="col-md-7 registro-title d-flex align-items-center d-flex justify-content-center">
          <div className="login-title d-flex justify-content-center">
            <h1>La Ruta del<br></br>Programador</h1>
          </div>
        </div>
        <div className="col-md-5 registro-content">
          <h3>Regístrate</h3>
          <hr className="line-header"></hr>
          <br></br>
          <form onSubmit={onSubmit}>
            <div className="required field ">
              <label className="form-title">Nombre de Usuario</label>
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
              <label className="form-title">Correo electrónico</label>
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
              <label className="form-title">Contraseña</label>
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
              <label className="form-title">Confirmar contraseña</label>
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
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuarioPage;