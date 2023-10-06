import PropTypes from "prop-types";

import "../NewPlaylist/Playlist.css";
import { useState, useEffect } from "react";
import api from "../../config/site.config";
//import { Navigate } from "react-router-dom";

const iconMap = {
  0: "Mantener imagen",
  1: "moon.svg",
  2: "earth.svg",
  3: "uranus.svg",
  4: "neptune.svg",
  5: "mars.svg",
  6: "haumea.svg",
};

const EditarPlaylist = ({ IdPlaylist }) => {
  const [planetSelected, setPlanetSelected] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState(iconMap[0]);
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
    let shouldReload = false; // Variable para rastrear si debemos recargar la página al final

    const resetFormAndError = () => {
      setFormState({
        title: "",
        description: "",
        idMundo: 0,
      });
      setError({
        titleError: "",
        descriptionError: "",
      });
    };

    if (formState.title !== "") {
      try {
        await api.put("playlist/titulo", {
          tituloPlaylist: formState.title,
          idPlaylist: IdPlaylist,
        });
        shouldReload = true; // Configuramos shouldReload en true si la llamada fue exitosa
      } catch (error) {
        setError({
          titleError: error.response?.data.errors?.tituloPlaylist?.[0] || "",
        });
      }
    }

    if (formState.description !== "") {
      try {
        await api.put("playlist/descripcion", {
          descripcionPlaylist: formState.description,
          idPlaylist: IdPlaylist,
        });
        shouldReload = true; // Configuramos shouldReload en true si la llamada fue exitosa
      } catch (error) {
        setError({
          descriptionError: error.response?.data.errors?.descripcionPlaylist?.[0] || "",
        });
      }
    }

    if (formState.idMundo !== 0) {
      await api.put("playlist/icono", {
        idMundo: formState.idMundo,
        idPlaylist: IdPlaylist,
      });
      shouldReload = true; // Configuramos shouldReload en true si la llamada fue exitosa
    }

    resetFormAndError();

    // Solo recargamos la página si no hubo errores en ninguna de las llamadas
    shouldReload ? window.location.reload() : "No refrescar ventana";
  };

  const handleEditar = (event) => {
    event.preventDefault();
    fetchData();
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
      <div className="modal fade" id="modalEditarPlaylist" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" data-bs-theme="dark">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edita tu Playlist
              </h1>
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
                  <label htmlFor="recipient-name" className="col-form-label">
                    Edita el nombre de tu Playlist:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="title"
                    value={title}
                    onInput={onInputChange}
                  />
                  <em>
                    <small>{error.titleError}</small>
                  </em>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Edita la descripción de tu Playlist:
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
                    <select
                      className="form-select"
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
                      <option value="0">Mantener ícono</option>
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
            <div className="modal-footer">
              {/* <button className="btn btn-primary" onClick={handleEditar}> */}
              <button className="btn btn-primary" onClick={handleEditar}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EditarPlaylist.propTypes = {
  IdPlaylist: PropTypes.number.isRequired
};

export default EditarPlaylist;
