import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formState;
  const { signin, signinErrors, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/mis_playlists");
    }
  }, [isAuthenticated, navigate]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    /* setError({
      titleError: "",
      descriptionError: "",
    });  */
  };

  const handleEnviar = async () => {
    //event.preventDefault();
    try {
      signin(formState)
    } catch (error) {}
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7"></div>
        <div className="col-md-5">
          <h3>Iniciar Sesión:</h3>
          <hr className="line-header"></hr>
          <br></br>
          <form>
            <div className="required field ">
              <label className="form-title">Correo:</label>
              <br></br>
              <input
                type="email"
                className="input-box"
                name="email"
                value={email}
                onInput={onInputChange}
              />
              {signinErrors && (
                <em>
                  <small>{signinErrors}</small>
                </em>
              )}
            </div>
            <div className="required field pt-2">
              <label className="form-title">Contraseña:</label>
              <br></br>
              <input
                type="password"
                className="input-box"
                name="password"
                value={password}
                onInput={onInputChange}
              />
              {signinErrors && (
                <em>
                  <small>{signinErrors}</small>
                </em>
              )}
            </div>
            <Link to={"/recuperar_contraseña"} href="">
              ¿Olvidaste tu contraseña?
            </Link>
          </form>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary" onClick={handleEnviar}>
              Ingresar
            </button>
          </div>
          <p>¿No tienes una cuenta?</p>
          <div className="d-flex justify-content-end">
            <Link to={"/registro"} className="btn btn-primary">
              Registrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
