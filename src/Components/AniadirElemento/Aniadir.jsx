import { useState, useEffect } from "react";
import { ModalConf } from "../ModalConfirmacion/ModalConf";
import "./Aniadir.css";
import api from "../../config/site.config";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const Aniadir = () => {
  let params = useParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState({
    urlError: "",
  });

  const onInputChange = () => {
    setError({
      urlError: "",
    });
  };

  const fetchData = async () => {
    try {
      await api.post("elemento_playlists", {
        urlElemento: url,
        idPlaylist: params.idPlaylist,
      });

      setUrl(url);
      setError({ urlError: "" });

      // Actualiza el estado modalVisible después de que la solicitud tenga éxito.
      setModalVisible(true);

      // console.log(modalVisible); // Aquí modalVisible debería reflejar true
    } catch (error) {

      if (error.response && error.response.data) {
        setError({
          urlError: error.response.data.errors?.urlElemento?.[0] || error.response.data.errors?.[0] || "",
        });
        throw new Error(error.response.data);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleAgregar = async (event) => {
    event.preventDefault();
    try {
      await fetchData();
      document.getElementById("closeModal").click();
      document.getElementById("btnConfirmAgregar").click();
    } catch (error) {
      // console.log(error);
    }
    //const modalConfirm = new bootstrap.Modal("#ModalConfirmacionAniadir")
    console.log(modalVisible);
  };

  useEffect(() => {
    // Reinicia el campo de URL cuando el modal se muestra
    const modalElement = document.getElementById("AniadirModal");
    modalElement.addEventListener("show.bs.modal", () => {
      setUrl("");
    });
  }, []);

  return (
    <div>
      <ModalConf
        Texto="Tu video fue agregado correctamente."
        ide="ModalConfirmacionAniadir"
        TxtButton="Aceptar"
      />
      <button
        type="button"
        className="btn btn-primary btn-confirm-modal"
        data-bs-toggle="modal"
        data-bs-target="#ModalConfirmacionAniadir"
        id="btnConfirmAgregar"
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
          height="25"
          viewBox="0 0 14 15"
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
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div
              className="modal-header border-bottom border-secondary mx-2"
              data-bs-theme="dark"
            >
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
                            Enlace:
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="URL"
                            aria-label="URL"
                            aria-describedby="basic-addon1"
                            value={url}
                            onInput={onInputChange}
                            onKeyDown={handleKeyPress}
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
                    onClick={handleAgregar}
                  >
                    Añadir
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
