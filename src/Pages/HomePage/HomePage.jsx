//import SideBar from "../../Components/SideBar/SideBar.jsx";

import { useLocation } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";

const HomePage = ({children}) => {
  const { state } = useLocation();
  return (
    <>
      {state?.logged ? (
        <div className="container-fluid">
          <NavBar />
          <div className="row">
            <div className="col-sm-3 px-0">
              <SideBar />
            </div>
            <div className="col-sm-9">
              {children}
            </div>
          </div>
        </div>
      ) : (
        <h1>La ruta del programador</h1>
      )}
    </>
  );
};

export default HomePage;
