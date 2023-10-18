
import "./RegistroUsuarioPage.css"
const RegistroUsuarioPage = () => {
  return (
    <div>
    <div className="col-sm-6 px-0">

    </div>
    <h1>Registrate</h1>
    <hr></hr>
    <br></br>
    <div className="col-sm-6">  
        <div className="required field ">
        <label>Nombre de Usuario</label>
        <br></br>
        <input type="text" placeholder="Ingresar nombre"/>
        <div data-lastpass-icon-root="true"></div></div>        
      
        <div className="required field ">
        <label>Correo electronico</label>
        <br></br>
        <input type="text" placeholder="Ingresar correo"/>
        <div data-lastpass-icon-root="true"></div></div>
      
        <div className="required field ">
        <label>Contraseña</label>
        <br></br>
        <input type="password" placeholder="Ingresar contraseña"/>
        <div data-lastpass-icon-root="true"></div></div>
     
        <div className="required field ">
        <label>Confirmar contraseña</label>
        <br></br>
        <input type="password" placeholder="Ingresar contraseña"/>
        <div data-lastpass-icon-root="true"></div></div>
        <br></br>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCrearPlaylist" data-bs-whatever="@mdo">Registrarse</button>
    </div>
    </div>
      
      
      

  )
}

export default RegistroUsuarioPage
