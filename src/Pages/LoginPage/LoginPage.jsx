import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import svgAstronautra from "../../assets/Image.svg";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;
  const { signin, signinErrors, isAuthenticated, emptyErrors, setEmptyErrors } = useAuth();

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
    setEmptyErrors({})
  };

  const handleEnviar = async () => {
    //event.preventDefault();
    try {
      signin(formState);
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
              <label className="form-title">Correo electrónico:</label>
              <br></br>
              <input
                type="email"
                className="input-box"
                placeholder="Ingresar correo"
                name="email"
                value={email}
                onInput={onInputChange}
              />
              {emptyErrors && (
                <em>
                  <small>{emptyErrors.email}</small>
                </em>
              )}
            </div>
            <div className="required field my-3">
              <label className="form-title">Contraseña:</label>
              <br></br>
              <input
                type="password"
                className="input-box"
                name="password"
                placeholder="Ingresar contraceña"
                value={password}
                onInput={onInputChange}
              />
              {emptyErrors && (
                <em>
                  <small>{emptyErrors.password}</small>
                </em>
              )}
            </div>
            <div className="d-flex justify-content-end">
              <Link to={"/recuperar_contraseña"} className="url-text"><u>¿Olvidaste tu contraseña?</u></Link>
            </div>
          </form>
          {signinErrors && (
            <div className="alert alert-danger" role="alert">
              {signinErrors}
            </div>
          )}
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleEnviar}
            >
              Ingresar
            </button>
          </div>
          <p>¿No tienes una cuenta?</p>
          <div className="d-flex justify-content-center">
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
