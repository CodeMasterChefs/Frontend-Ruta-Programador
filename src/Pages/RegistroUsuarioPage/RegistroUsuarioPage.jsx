
import "./RegistroUsuarioPage.css"
const RegistroUsuarioPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <img src="src/assets/undraw_to_the_moon_re_q21i 1.svg" alt="Ilustración" />
        </div>
        <div className="col-md-5">
          <h1>Registrate</h1>
          <hr></hr>
          <br></br>
          <div>
            <div className="required field">
              <label className="form-title">Nombre de Usuario</label>
              <br></br>
              <input type="text" placeholder="Ingresar nombre" className="input-box" />
              <div data-lastpass-icon-root="true"></div></div>

            <div className="required field ">
              <label className="form-title">Correo electronico</label>
              <br></br>
              <input type="text" placeholder="Ingresar correo" className="input-box" />
              <div data-lastpass-icon-root="true"></div></div>

            <div className="required field ">
              <label className="form-title">Contraseña</label>
              <br></br>
              <input type="password" placeholder="Ingresar contraseña" className="input-box" />
              <div data-lastpass-icon-root="true"></div></div>

            <div className="required field ">
              <label className="form-title">Confirmar contraseña</label>
              <br></br>
              <input type="password" placeholder="Ingresar contraseña" className="input-box" />
              <div data-lastpass-icon-root="true"></div></div>
            <br></br>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCrearPlaylist" data-bs-whatever="@mdo">Registrarse</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

}

export default RegistroUsuarioPage


