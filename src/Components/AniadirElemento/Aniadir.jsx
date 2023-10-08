import { ModalConf } from "../ModalConfirmacion/ModalConf";
import "./Aniadir.css";
import api from "../../config/site.config";
import { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const Aniadir = () => {
  let params = useParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState({
    urlError: "",
  });

  const fetchData = async () => {
    try {
      const response = await api.post("elemento_playlists", {
        urlElemento: url,
        idPlaylist: params.idPlaylist,
      });

      console.log("Entro correctamente");
      console.log(response);

      setUrl(url);
      setError({ urlError: "" });

      // Actualiza el estado modalVisible después de que la solicitud tenga éxito.
      setModalVisible(true);

      console.log(modalVisible); // Aquí modalVisible debería reflejar true
    } catch (error) {
      console.log("Fallo");
      console.log(error);
      if (error.response && error.response.data) {
        setError({
          urlError: error.response.data.errors?.urlElemento?.[0] || "",
        });
        throw new Error(error.response.data)
      }
    }
  };

  const handleAniadir = async (event) => {
    event.preventDefault();
    try {
      await fetchData();
      document.getElementById("closeModal").click();
      document.getElementById("btnModalConfirm").click();
    } catch (error) {
      console.log(error)
    }
    //const modalConfirm = new bootstrap.Modal("#ModalConfirmacionAniadir")
    console.log(modalVisible);
  };

  return (
    <div>
      <ModalConf
        Texto= "Tu video fue agregado correctamente, revisa hasta el final de tu Playlist para encontrarlo"
        ide="ModalConfirmacionAniadir"
        TxtButton="Aceptar"
      />
      <button
        
        type="button"
        className="btn btn-primary btn-confirm-modal"
        data-bs-toggle="modal"
        data-bs-target="#ModalConfirmacionAniadir"
        id = "btnModalConfirm"
      >
        Launch demo modal
      </button>
      <button
        type="button"
        className="btn btn-primary new-plus-button"
        data-bs-toggle="modal"
        data-bs-target="#AniadirModal"
        data-bs-whatever="@fat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
        >
          <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="black" />
        </svg>
      </button>

      <div
        className="modal fade"
        id="AniadirModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeModal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="basic-url" className="form-label">
                    Ingresa la URL del video que quieras añadir a tu playlist
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
                    <div className="form-floating">
                      <div className="input-group mb-3">
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            Enlace
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="URL"
                            aria-label="URL"
                            aria-describedby="basic-addon1"
                            value={url}
                            onChange={(e) => {
                              setUrl(e.target.value);
                            }}
                          />
                        </div>
                        <em>
                          <small>{error.urlError}</small>
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="d-flex justify-content-end">
                <div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleAniadir}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aniadir;

Aniadir.propTypes = {
  idPlaylist: PropTypes.string.isRequired,
};
