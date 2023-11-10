import { Link, NavLink } from "react-router-dom";
import { ArrowBackIcon, HamburguerMenuIcon, HomeIcon, Usericon } from "../icons";
import "./NavBar.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [userData, setUserData] = useState(null);

  const elements = (
    <>
      <li className="nav-item">
        <NavLink to={"/mi_cuenta"} className="nav-link">
          Tu cuenta
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/mis_playlists" className="nav-link">
          Mis Playlists
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/comunidad"} className="nav-link">
          Comunidad
        </NavLink>
      </li>
    </>
  );

  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem('userData');
    if (userDataFromLocalStorage) {
      setUserData(JSON.parse(userDataFromLocalStorage));
    }
  }, []);

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="navbar-brand d-flex align-items-center">
            <a className="arrow-button-navbar">
              <button className="btn btn-primary" onClick={() => window.history.back()}>
                <ArrowBackIcon />
              </button>
            </a>
            <Link className="navbar-brand navbar-text-title" to="/">
              La Ruta del Programador
            </Link>
          </div>

          <div className="d-flex align-items-center">
            <span className="">
              <Link className="Icons" type="button" to="/">
                <HomeIcon />
              </Link>
            </span>
            <button className="sm-sidebar navbar-toggler m-2" data-bs-toggle="offcanvas" data-bs-target="#sm-sidebar">
              <HamburguerMenuIcon />
            </button>
          </div>
        </div>
      </nav>

      {/* De aquí para abajo es el panel que se abre por la derecha */}
      < div className="offcanvas offcanvas-end" tabIndex="-1" id="sm-sidebar" >
        <div className="offcanvas-header d-flex justify-content-end">
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <div className="text-center">
              <Usericon></Usericon>
              {userData && <p className="text-center">{userData.username}</p>}
            </div>
            <ul className="nav flex-column mb-auto">{elements}</ul>
          </div>
        </div>
      </div >
    </>
  );
};

export default NavBar;
