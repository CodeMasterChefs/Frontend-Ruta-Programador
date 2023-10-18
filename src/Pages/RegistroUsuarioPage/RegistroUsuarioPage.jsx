
import "./RegistroUsuarioPage.css"
const RegistroUsuarioPage = () => {
  return (
    <div>
    <div className="col-sm-6 px-0">

    </div>
    <div className="col-sm-6">  
        <div className="required field cajita">
        <label>Nombre de Usuario</label>
        <br></br>
        <input type="text" placeholder="Ingresar nombre"/>
        <div data-lastpass-icon-root="true"></div></div>
        <br></br>
        <br></br>
        <div className="required field cajita">
        <label>Correo electronico</label>
        <br></br>
        <input type="text" placeholder="Ingresar correo"/>
        <div data-lastpass-icon-root="true"></div></div>
        <br></br>
        <br></br>
        <div className="required field cajita">
        <label>Contraseña</label>
        <br></br>
        <input type="password" placeholder="Ingresar contraseña"/>
        <div data-lastpass-icon-root="true"></div></div>
        <br></br>
        <br></br>
        <div className="required field cajita">
        <label>Confirmar contraseña</label>
        <br></br>
        <input type="password" placeholder="Ingresar contraseña"/>
        <div data-lastpass-icon-root="true"></div></div>
        <br></br>
    </div>
    </div>
      
      
      

  )
}

export default RegistroUsuarioPage
