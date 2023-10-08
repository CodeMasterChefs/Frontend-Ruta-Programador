import PropTypes from "prop-types";

import "../NewPlaylist/Playlist.css";
import { useState, useEffect } from "react";
import api from "../../config/site.config";
//import { Navigate } from "react-router-dom";

const iconMap = {
  1: "moon.svg",
  2: "earth.svg",
  3: "uranus.svg",
  4: "neptune.svg",
  5: "mars.svg",
  6: "haumea.svg",
};

const EditarPlaylist = ({ IdPlaylist }) => {
  const [planetSelected, setPlanetSelected] = useState();
  const [selectedIcon, setSelectedIcon] = useState();
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

  // Llamar a fetchData cuando se monta el componente
  useEffect(() => {
    const fetchDataPlaylist = async () => {
      const response = await api.get(`/playlist/valores/${IdPlaylist}`);
      // Actualiza el estado utilizando setFormState
      setFormState({
        title: response.data.tituloPlaylist,
        description: response.data.descripcionPlaylist,
        idMundo: response.data.idMundo,
      });
    };

    fetchDataPlaylist();
  }, [IdPlaylist]);

  useEffect(() => {
    setSelectedIcon(iconMap[formState.idMundo]); // Se ejecutará una vez al montar el componente
  }, [formState.idMundo]);

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

    const errors = {}; // Objeto para rastrear errores

    try {
      await api.put("playlist/titulo", {
        tituloPlaylist: formState.title,
        idPlaylist: IdPlaylist,
      });
    } catch (error) {
      if (error.response && error.response.data) {
        errors.titleError =
          error.response.data.errors?.tituloPlaylist?.[0] || "";
      }
    }

    try {
      await api.put("playlist/descripcion", {
        descripcionPlaylist: formState.description,
        idPlaylist: IdPlaylist,
      });
    } catch (error) {
      if (error.response && error.response.data) {
        errors.descriptionError =
          error.response.data.errors?.descripcionPlaylist?.[0] || "";
      }
    }

    await api.put("playlist/icono", {
      idMundo: formState.idMundo,
      idPlaylist: IdPlaylist,
    });

    // Actualizamos el estado de errores con el objeto de errores
    setError({
      titleError: errors.titleError,
      descriptionError: errors.descriptionError,
    });

    // Solo recargamos la página si no hay errores
    if (!errors.titleError && !errors.descriptionError) {
      resetFormAndError();
      window.location.reload();
    }
  };

  const handleEditar = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

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
            <div
              className="modal-header p-2 mx-2 border-bottom border-secondary"
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
              <h3
                className="modal-title fs-5 text-center"
                id="exampleModalLabel"
              >
                Edita tu Playlist
              </h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Edita el nombre a tu Playlist:
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
                    Edita la descripción a tu Playlist:
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
                      className="form-select custom-option"
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
            <div className="modal-footer">
              {/* <button className="btn btn-primary" onClick={handleEditar}> */}
              <button className="btn btn-primary" onClick={handleEditar}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EditarPlaylist.propTypes = {
  IdPlaylist: PropTypes.number.isRequired,
};

export default EditarPlaylist;
