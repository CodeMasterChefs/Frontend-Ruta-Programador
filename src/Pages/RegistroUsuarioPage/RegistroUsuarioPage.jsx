import { useNavigate } from "react-router-dom";
import "./RegistroUsuarioPage.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
const RegistroUsuarioPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const {signup, isAuthenticated} = useAuth();

  useEffect(() => {
    if(isAuthenticated){
      navigate("/mis_playlists", {
        replace: true,
        state: {
          logged: true,
        },
      });
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit((values) => {
    signup(values);
    console.log(values)
    navigate("/mis_playlists", {
      replace: true,
      state: {
        logged: true,
      },
    });
  });
  const onRegister = () => {
    navigate("/mis_playlists", {
      replace: true,
      state: {
        logged: true,
      },
    });
  };
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
              <div data-lastpass-icon-root="true"></div>
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
              <div data-lastpass-icon-root="true"></div>
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
              <div data-lastpass-icon-root="true"></div>
            </div>

            <div className="required field ">
              <label>Confirmar contraseña</label>
              <br></br>
              <input
                className="form-control"
                type="password"
                {...register("password2", { required: true })}
                placeholder="Ingresar contraseña"
              />
              <div data-lastpass-icon-root="true"></div>
            </div>
            <br></br>
            <button
              type="submit"
              className="btn btn-primary"
              /* data-bs-toggle="modal"
              data-bs-target="#modalCrearPlaylist"
              data-bs-whatever="@mdo" */
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuarioPage;
