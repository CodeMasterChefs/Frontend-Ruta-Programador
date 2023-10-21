import "./RegistroUsuarioPage.css";
const RegistroUsuarioPage = () => {
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
          <form>
            <div className="required field ">
              <label>Nombre de Usuario</label>
              <br></br>
              <input type="text" className="form-control" placeholder="Ingresar nombre" />
              <div data-lastpass-icon-root="true"></div>
            </div>

            <div className="required field ">
              <label>Correo electronico</label>
              <br></br>
              <input className="form-control" type="email" placeholder="Ingresar correo" />
              <div data-lastpass-icon-root="true"></div>
            </div>

            <div className="required field ">
              <label>Contraseña</label>
              <br></br>
              <input className="form-control" type="password" placeholder="Ingresar contraseña" />
              <div data-lastpass-icon-root="true"></div>
            </div>

            <div className="required field ">
              <label>Confirmar contraseña</label>
              <br></br>
              <input className="form-control" type="password" placeholder="Ingresar contraseña" />
              <div data-lastpass-icon-root="true"></div>
            </div>
            <br></br>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#modalCrearPlaylist"
              data-bs-whatever="@mdo"
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
