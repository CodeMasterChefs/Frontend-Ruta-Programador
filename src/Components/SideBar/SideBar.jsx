import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { Usericon } from "../icons";
import { useEffect, useState } from "react";
const SideBar = () => {
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
      <div className="lg-sidebar">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100">
          <div className="text-center">
            <Usericon></Usericon>
            {userData && <p className="text-center">{userData.username}</p>}
          </div>
          <ul className="nav nav-pills flex-column mb-auto">{elements}</ul>
        </div>
      </div>
      <div className="sm-sidebar">
        <div className="">
          <nav className="navbar navbar-toggle-menu-bg">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbarLight"
              aria-controls="offcanvasNavbarLight"
              aria-label="Toggle navigation"
              data-bs-theme="dark"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbarLight"
            >
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
                  <p className="text-center">{userData.username}</p>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  {elements}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideBar;
