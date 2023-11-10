import PropTypes from "prop-types";
import "./Playlist.css";
import { useState, useEffect } from "react";
import api from "../../config/site.config";
import { ModalConf } from "../ModalConfirmacion/ModalConf";
import ModalConfPlaylist from "../ModalConfirmacion/ModalConfPlaylist";
// import { Navigate } from "react-router-dom";
import { SubirIconoNuevo } from "../icons";

const iconMap = {
  1: "moon.svg",
  2: "earth.svg",
  3: "uranus.svg",
  4: "neptune.svg",
  5: "mars.svg",
  6: "haumea.svg",
};

const Playlist = ({ CantPlaylists }) => {
  const [planetSelected, setPlanetSelected] = useState(1);
  const [selectedIcon, setSelectedIcon] = useState(iconMap[1]);
  const [modalVisible, setModalVisible] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    idMundo: planetSelected,
  });
  const { title, description, idMundo } = formState;
  const [error, setError] = useState({
    titleError: "",
    descriptionError: "",
  });

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setError({
      titleError: "",
      descriptionError: "",
    });
  };

  const fetchData = async () => {
    if (CantPlaylists >= 100) {
      alert("Alcanzaste tu límite para crear Playlists");
      return;
    }

    api
      .post("playlist", {
        tituloPlaylist: formState.title,
        descripcionPlaylist: formState.description,
        idMundo: formState.idMundo,
      })
      .then((response) => {
        console.log(response);
        setFormState({
          title: "",
          description: "",
          idMundo: 1,
        });
        setError({
          titleError: "",
          descriptionError: "",
        });
        setModalVisible(true);
        document.getElementById("btnModalConfirmPlaylist").click();
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          setError({
            titleError: error.response.data.errors?.tituloPlaylist?.[0] || "",
            descriptionError:
              error.response.data.errors?.descripcionPlaylist?.[0] || "",
          });
        }
      });
  };
  const handleCrear = async () => {
    try {
      await fetchData();
      document.getElementById("closeModal").click();
      
    } catch (error) {
      console.log(error)
    }
    console.log(modalVisible);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  useEffect(() => {
    setSelectedIcon(iconMap[planetSelected]);
  }, [planetSelected]);

  const loadSelectedIcon = () => {
    if (selectedIcon) {
      return (
        <img
          src={`/iconoMundos/${selectedIcon}`}
          alt={planetSelected}
          className="selected-icon"
        />
      );
    }
    return null;
  };

  return (
    <>
      
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalCrearPlaylist"
        data-bs-whatever="@mdo"
        // disabled={CantPlaylists >= 100}
      >
        Nueva Playlist
      </button>

      <div className="modal fade" id="modalCrearPlaylist" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div
              className="modal-header p-2 mx-2 justify-content-center border-bottom border-secondary"
              data-bs-theme="dark"
            >
              <button
                type="button"
                className="btn-small btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {setFormState({
                  title: "",
                  description: "",
                  idMundo: 1,
                });}}
              ></button>
            </div>
            <div className="modal-body py-2">
              <h3
                className="modal-title fs-5 mx-auto text-center"
                id="exampleModalLabel"
              >
                Crear una nueva Playlist
              </h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Dale un nombre a tu Playlist:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="title"
                    value={title}
                    onInput={onInputChange}
                    onKeyDown={handleKeyPress}
                  />
                  <em>
                    <small>{error.titleError}</small>
                  </em>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Añade una descripción a tu Playlist:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="description"
                    value={description}
                    onInput={onInputChange}
                    rows={5}
                  ></textarea>
                  <em>
                    <small>{error.descriptionError}</small>
                  </em>
                </div>
                <div className="row">
                  <div className="col-auto">
                    {loadSelectedIcon()} {/* Muestra el ícono seleccionado */}
                  </div>
                  <div className="col-auto" data-bs-theme="dark">
                    <p className="col-form-label">Selecciona un ícono</p>
                    <select
                      className="form-select"
                      id="planetIcon"
                      value={idMundo}
                      onChange={(e) => {
                        const selected = e.target.value;
                        setPlanetSelected(selected);
                        setSelectedIcon(iconMap[selected]); // Asigna el nombre del ícono
                        setFormState({
                          ...formState,
                          idMundo: selected,
                        });
                      }}
                    >
                      <option value="1">The moon</option>
                      <option value="2">The earth</option>
                      <option value="3">Uranus</option>
                      <option value="4">Neptune</option>
                      <option value="5">Mars</option>
                      <option value="6">Haumea</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="posiciton">
            <SubirIconoNuevo></SubirIconoNuevo>
            <button
              type="button"
              className="btn btn-secondary mx-2"
              data-bs-toggle="modal"
              data-bs-target="#modalCancelarRegistro"
              data-bs-whatever="@mdo"
            >
              Subir Icono
            </button>
          </div>
          <button className="btn btn-primary" onClick={handleCrear}>
            Crear
          </button>
        </div>

          </div>
        </div>
      </div>
      <ModalConfPlaylist/>
      <button
        type="button"
        className="btn btn-primary btn-confirm-modal"
        data-bs-toggle="modal"
        data-bs-target="#ModalConfirmacionPlaylist"
        id="btnModalConfirmPlaylist"
      >
        Launch demo modal
      </button>
    </>
  );
};
export default Playlist;

Playlist.propTypes = {
  CantPlaylists: PropTypes.number,
};
