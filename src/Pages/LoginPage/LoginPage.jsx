
import "./LoginPage.css"
import svgAstronautra from "../../assets/Image.svg";
const LoginPage = () => {
  return (
    <div className="container">
      <img
        className="undraw-image"
        src={svgAstronautra}
        alt="Ilustración"
      />
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
                type="text"
                className="input-box"
                placeholder="Ingresar correo"
              />
            </div>
            <div className="required field my-3">
              <label className="form-title">Contraseña:</label>
              <br></br>
              <input
                type="text"
                className="input-box"
                placeholder="Ingresar contraseña"
              />
            </div>
            <div className="d-flex justify-content-end">
              <a href="" className="url-text"><u>¿Olvidaste tu contraseña?</u></a>
            </div>

          </form>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Ingresar
            </button>    
          </div>
          <div className="d-flex justify-content-center">
            <p className="question-text">¿No tienes una cuenta?</p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Registrate
            </button>    
          </div>
        </div>
      </div>
  </div>
  )
}

export default LoginPage