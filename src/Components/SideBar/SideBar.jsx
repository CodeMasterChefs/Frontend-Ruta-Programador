const SideBar = () => {
  return (
    <>
      <div className="col-auto bg-dark col-md-3 d-flex flex-column justify-content-between min-vh100">
        <div>
          <a
            href="#tuCuenta"
            className="text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline"
          >
            <span className="fs-4">Mis Playlists</span>
          </a>
        </div>
        <div className="dropdown open">
          <a
            className="btn border-none dropdown-toggle text-white"
            type="button"
          >
            <span>Comunidad</span>
          </a>
          <div className="dropdown-menu">
            <a
              className="btn btn-secondary dropdown-toggle text-white"
              href="#"
            >
              My Playlists
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
