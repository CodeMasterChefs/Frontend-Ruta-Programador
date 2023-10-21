import { ModalConf } from "../ModalConfirmacion/ModalConf";
import "./Eliminar.css";
import api from "../../config/site.config";
import PropTypes from "prop-types";

export const EliminarElemento = ({ Imagen, Titulo, IdPlaylist, IdElemento }) => {

  const handleDelete = async () => {
    try {
      const response = await api.remove(`elemento_playlists?idElemento=${IdElemento}&idPlaylist=${IdPlaylist}`)
      console.log(response);
    } catch (error) {
      console.error('Error al eliminar el elemento:', error);
    }
  };

  return (
    <>
      <div>
        <ModalConf
          Texto={"El video se eliminó correctamente de tu Playlist"}
          TxtButton="Aceptar"
          ide="ModalConfirmacionEliminar"
        />

        <div
          className="modal fade"
          id={"eliminarElementoModal" + IdElemento}
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
                    <div className="p-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.884 2.532C12.538 1.878 11.462 1.878 11.116 2.532L2.11596 19.532C2.03494 19.6844 1.99478 19.8551 1.99938 20.0276C2.00398 20.2001 2.05319 20.3685 2.14221 20.5164C2.23124 20.6642 2.35704 20.7864 2.50736 20.8712C2.65768 20.956 2.82739 21.0003 2.99996 21H21C21.1724 21.0004 21.342 20.956 21.4922 20.8713C21.6424 20.7866 21.7681 20.6644 21.8571 20.5167C21.946 20.3689 21.9951 20.2006 21.9997 20.0282C22.0042 19.8559 21.964 19.6852 21.883 19.533L12.884 2.532ZM13 18H11V16H13V18ZM11 14V9H13L13.001 14H11Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    </div>
                    <div className="p-2 flex-fill">
                      <label htmlFor="basic-url" className="form-label">
                        ¿Estás seguro de eliminar este elemento de tu Playlist?
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
                          <div className="p-2 d-flex align-items-center body-content-modal">
                            <div className="form-floating">
                              <div className="input-group input-group-lg">
                                <span
                                  className="input-group-text"
                                  id="inputGroup-sizing-lg"
                                >
                                  <img src={Imagen} className="img-fluid" alt="..." />
                                </span>

                                <div>
                                  <p className="d-flex align-items-center text-Titulo">
                                    {Titulo}
                                  </p>
                                </div>


                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 last-row"></div>
                  </div>
                </form>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary btn-delete"
                    data-bs-target="#ModalConfirmacionEliminar"
                    data-bs-toggle="modal"
                    type="submit"
                    onClick={handleDelete}
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
EliminarElemento.propTypes = {
  Imagen: PropTypes.string.isRequired,
  Titulo: PropTypes.string.isRequired,
  IdPlaylist: PropTypes.number.isRequired,
  IdElemento: PropTypes.number.isRequired,
};
export default EliminarElemento;