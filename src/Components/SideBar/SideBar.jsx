import { NavLink } from "react-router-dom";
import "./SideBar.css";
const SideBar = () => {
  const elements = (
    <>
      <li className="nav-item">
        <NavLink to={"/"} className="nav-link">
          Tu cuenta
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/"} className="nav-link">
          Tus Playlists
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={"/"} className="nav-link">
          Comunidad
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="lg-sidebar">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100">
          <div className="">
            <p className="text-center">Username</p>
          </div>
          <ul className="nav nav-pills flex-column mb-auto">{elements}</ul>
        </div>
      </div>
      <div className="sm-sidebar">
        <div className="">
          <nav className="navbar bg-body-tertiary">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbarLight"
              aria-controls="offcanvasNavbarLight"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbarLight"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLightLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="">
                  <p className="text-center">Username</p>
                </div>
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
