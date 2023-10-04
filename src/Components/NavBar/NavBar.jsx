import { HamburguerMenuIcon } from "../icons";
import "./NavBar.css"


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar-bg" data-bs-theme="dark">
      <div className="container-fluid d-flex justify-content-between align-items-centers">
        <a className="navbar-brand" href="#">
          La Ruta del Programador
        </a>
        
        <div className="d-flex">
          <form className="d-flex formulario-buscador" role="search">
            <input
              className="form-control me-2 input-container"
              type="search"
              placeholder="¿Qué quieres buscar?"
            />
          </form>
          <button
            className="Icons"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
           <HamburguerMenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
