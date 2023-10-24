import { useNavigate } from "react-router-dom";
import "./RegistroUsuarioPage.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import CancelarRegistro from "../../Components/ModalRegister/CancelarRegistro";
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
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((values) => {
    signup(values);
    console.log(values);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="src/assets/undraw_to_the_moon_re_q21i 1.svg"
            alt="Ilustración"
          />
        </div>
        <div className="col-md-6">
          <h2>Registrate</h2>
          <hr></hr>
          <br></br>
          <form onSubmit={onSubmit}>
            <div className="required field ">
              <label>Nombre de Usuario</label>
              <br></br>
              <input
                type="text"
                {...register("username", { required: true })}
                className="form-control"
                placeholder="Ingresar nombre"
              />
              {registerErrors.username && (
                <small>
                  <p className="text-white">{registerErrors.username[0]}</p>
                </small>
              )}
              {errors.username && <p>La contraseña es obligatoria</p>}
            </div>
            <div className="required field ">
              <label>Correo electronico</label>
              <br></br>
              <input
                className="form-control"
                {...register("email", { required: true })}
                type="email"
                placeholder="Ingresar correo"
              />
              {registerErrors.email && (
                <small>
                  <p className="text-white">{registerErrors.email[0]}</p>
                </small>
              )}
              {errors.email && <p>La contraseña es obligatoria</p>}
            </div>
            <div className="required field ">
              <label>Contraseña</label>
              <br></br>
              <input
                className="form-control"
                {...register("password", { required: true })}
                type="password"
                placeholder="Ingresar contraseña"
              />
              {registerErrors.password && (
                <small>
                  <p className="text-white">{registerErrors.password[0]}</p>
                </small>
              )}
              {errors.password && <p>La contraseña es obligatoria</p>}
              <div data-lastpass-icon-root="true"></div>
            </div>
            <div className="required field ">
              <label>Confirmar contraseña</label>
              <br></br>
              <input
                className="form-control"
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
