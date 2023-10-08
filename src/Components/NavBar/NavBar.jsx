import { Link } from "react-router-dom";
import { HamburguerMenuIcon, HomeIcon } from "../icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg custom-navbar-bg"
      data-bs-theme="dark"
    >
      <div className="container-fluid d-flex justify-content-between align-items-centers">
        <div className="d-flex inline">
          <button
            className="btn btn-primary"
            onClick={() => window.history.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M26.2499 13.75H8.01742L14.6337 7.13377L12.8662 5.36627L3.23242 15L12.8662 24.6338L14.6337 22.8663L8.01742 16.25H26.2499V13.75Z"
                fill="black"
              />
            </svg>
          </button>
          <Link className="navbar-brand" to="/">
            La Ruta del Programador
          </Link>
        </div>

        <div className="d-flex">
          <form className="d-flex formulario-buscador" role="search">
            <input
              className="form-control me-2 input-container ps-4 "
              type="search"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="position-absolute top-50  translate-middle-y search-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </form>

          <Link className="Icons py-2" type="button" to="/">
            <HomeIcon />
          </Link>
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
