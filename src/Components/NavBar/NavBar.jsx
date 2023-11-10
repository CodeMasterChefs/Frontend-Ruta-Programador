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
            <ArrowBackIcon />
          </button>
          <Link className="navbar-brand navbar-text-title" to="/">
            La Ruta del Programador
          </Link>
        </div>

        <div className="d-flex">
          <Link className="Icons py-2" type="button" to="/">
            <HomeIcon />
          </Link>

          <div className="sm-sidebar">
            <button
              className="navbar-toggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#sm-sidebar"
            >
              <HamburguerMenuIcon />
            </button>

            {/* De aquí para abajo es el panel que se abre por la derecha */}
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="sm-sidebar">
              <div className="offcanvas-header d-flex justify-content-end">
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="d-flex justify-content-center">
                  <Usericon></Usericon>
                </div>
                {userData && <p className="text-center">{userData.username}</p>}
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  {elements}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
