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
        <div className="d-flex inline arrow-button-navbar">
          <button
            className="btn btn-primary"
            onClick={() => window.history.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="4 7 18 18"
              fill="none"
            >
              <path
                d="M26.2499 13.75H8.01742L14.6337 7.13377L12.8662 5.36627L3.23242 15L12.8662 24.6338L14.6337 22.8663L8.01742 16.25H26.2499V13.75Z"
                fill="black"
              />
            </svg>
          </button>
          <Link className="navbar-brand navbar-text-title" to="/">
            La Ruta del Programador
          </Link>
        </div>

        <div className="d-flex">

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
