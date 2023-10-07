import { HamburguerMenuIcon, HomeIcon} from "../icons";
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
              className="form-control me-2 input-container ps-4 "
              type="search"
              placeholder="Search"             
            />
             <svg xmlns="http://www.w3.org/2000/svg" 
             className="position-absolute top-50  translate-middle-y search-icon" 
             width="20"
             height="20"
             viewBox="0 0 20 20"            
             fill="currentColor">
               <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </form>
          
          <button
            className="Icons"
            type="button"            
          >
            <HomeIcon />
          </button>
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



