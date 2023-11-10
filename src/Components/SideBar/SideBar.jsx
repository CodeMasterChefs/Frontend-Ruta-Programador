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
    </>
  );
};

export default SideBar;
