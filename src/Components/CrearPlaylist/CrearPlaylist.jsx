const CrearPlaylist = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-center">Crear una nueva Playlist</p>
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="col-form-label "
                  >
                    Dale un nombre a tu Playlist:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  ></input>
                </div>
                <div className="mb-3">
                  <label className="col-form-label">
                    Añade una descripción a tu Playlist:
                  </label>
                  <textarea className="form-control"></textarea>
                </div>
              </form>
              <div className="row">
                <div className="col border border-dark">
                  <span className=""></span>
                </div>
                <div className="col">
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Selecciona un icono
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item">The moon</button>
                      </li>
                      <li>
                        <button className="dropdown-item">The moon</button>
                      </li>
                      <li>
                        <button className="dropdown-item">The moon</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearPlaylist;
