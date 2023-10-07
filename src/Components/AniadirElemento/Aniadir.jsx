import { ModalConf } from "../ModalConfirmacion/ModalConf";
import "./Aniadir.css"
import api from "../../config/site.config";
import { useState } from "react";
import PropTypes from "prop-types";

export const Aniadir = ({ idPlaylist }) => {
  const [crear, setCrear] = useState(true);
  const [url, setUrl] = useState("");
  const [error, setError] = useState({
    urlError: "",
  });

  const fetchData = async () => {
    api
      .post("elemento_playlists", {
        urlElemento: url,
        idPlaylist: idPlaylist,
      })
      .then((response) => {
        console.log(response);
        setUrl(url);
        setCrear(true);

        setError({
          urlError: "",
        });
      })
      .catch((error) => {
        setCrear(false);
        console.log(crear);
        console.log(error);
        if (error.response && error.response.data) {
          setError({
            urlError: error.response.data.errors?.urlElemento?.[0] || "",
          });
        }
      });
  };
  const handleAniadir = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <ModalConf
        Texto="Tu video fue agregado correctamente, revisa hasta el final de tu Playlist para encontrarlo"
        ide="ModalConfirmacionAniadir"
        TxtButton="Aceptar"
      />
      <button
        type="button"
        className="btn btn-primary new-plus-button"
        data-bs-toggle="modal"
        data-bs-target="#AniadirModal"
        data-bs-whatever="@fat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="20" 
             height="20" 
             viewBox="0 0 14 20" 
             fill="none">
          <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="black"/>
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
              ></button>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
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
                  <label htmlFor="basic-url" className="form-label">
                    Ingresa la URL del video que quieras añadir a tu playlist
                  </label>
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
              </form>
              <div className="d-flex justify-content-end">
                {crear ? (
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    type="submit"
                    onClick={handleAniadir}
                    data-bs-target="#ModalConfirmacionAniadir"
                  >
                    Añadir
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleAniadir}
                  >
                    Añadir
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Aniadir.propTypes = {
  idPlaylist: PropTypes.string.isRequired,
};
