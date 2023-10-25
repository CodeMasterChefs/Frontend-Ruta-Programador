
import "./InicioSesionPage.css"
const InicioSesionPage = () => {
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
              type="text"
              className="input-box"
            />
          </div>
          <div className="required field ">
            <label className="form-title">Contraseña:</label>
            <br></br>
            <input
              type="text"
              className="input-box"
            />
          </div>
          <a href="">¿Olvidaste tu contraseña?</a>

        </form>
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Ingresar
          </button>    
        </div>
        <p>¿No tienes una cuenta?</p>
        <div className="d-flex justify-content-end">
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

export default InicioSesionPage
