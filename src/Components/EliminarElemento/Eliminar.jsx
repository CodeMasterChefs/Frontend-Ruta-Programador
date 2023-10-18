import { ModalConf } from "../ModalConfirmacion/ModalConf";
import "./Eliminar.css";
export const Eliminar = () => {
  return (
    <>
      <div>
        <ModalConf
          Texto="El video “Título de video” se eliminó correctamente de tu Playlist"
          ide="ModalConfirmacionEliminar"
        />
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#EliminarModal"
          data-bs-whatever="@fat"
        >
          Eliminar Playlist
        </button>

        <div
          className="modal fade"
          id="EliminarModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div
                className="modal-header p-2 mx-2  border-bottom border-secondary"
                data-bs-theme="dark"
              >
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="d-flex mb-2">
                    <div className="p-2"></div>
                    <div className="p-2 flex-fill">
                      <label htmlFor="basic-url" className="form-label">
                        Ingresa la URL del video que quieras añadir a tu
                        playlist
                      </label>
                      <label
                        htmlFor="message-text"
                        className="col-form-label"
                      ></label>
                      <div className="form-floating">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        ></label>
                        <div className="row mb-3">
                          <div className="p-2">
                            <div className="form-floating">
                              <div className="input-group input-group-lg">
                                <span
                                  className="input-group-text"
                                  id="inputGroup-sizing-lg"
                                >
                                  Elemento
                                </span>
                                <input
                                  type="text"
                                  className="form-control"
                                  aria-label="Sizing example input"
                                  aria-describedby="inputGroup-sizing-lg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2"></div>
                  </div>
                </form>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#ModalConfirmacionEliminar"
                    data-bs-toggle="modal"
                    type="submit"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
