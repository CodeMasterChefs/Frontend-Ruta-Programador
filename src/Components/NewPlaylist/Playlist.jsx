import PropTypes from "prop-types";
import "./Playlist.css";
import { useState, useEffect, useRef } from "react";
import api from "../../config/site.config";
import ModalConfPlaylist from "../ModalConfirmacion/ModalConfPlaylist";
import { SubirIconoNuevo } from "../icons";

const iconMap = {
  1: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/moon.svg",
  2: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/earth.svg",
  3: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/uranus.svg",
  4: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/neptune.svg",
  5: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/mars.svg",
  6: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/haumea.svg",
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
    iconError: "",
  });
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setError({
      titleError: "",
      descriptionError: "",
      iconError: "",
    });
  };

  const fetchData = async () => {
    if (CantPlaylists >= 100) {
      alert("Alcanzaste tu límite para crear Playlists");
      return;
    }
    const formData = new FormData();
    let queryParams = {};

    if (file) {
      formData.append("iconoPersonalizado", file);
      queryParams = {
        tituloPlaylist: formState.title,
        descripcionPlaylist: formState.description,
      };
    } else {
      queryParams = {
        tituloPlaylist: formState.title,
        descripcionPlaylist: formState.description,
        idMundo: formState.idMundo,
      };
    }

    api
      .post("playlist", formData, {
        params: queryParams,
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
        console.error(error.response.data);
        if (error.response && error.response.data) {
          setError({
            titleError: error.response.data.errors?.tituloPlaylist?.[0] || "",
            descriptionError:
              error.response.data.errors?.descripcionPlaylist?.[0] || "",
            iconError: error.response.data.errors?.iconoPersonalizado?.[0] || "",
          });
        }
      });
  };
  const handleCrear = async () => {
    try {
      await fetchData();
      document.getElementById("closeModal").click();
    } catch (error) {
      console.log(error);
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
      if (typeof selectedIcon === "string") {
        return (
          <img
            src={selectedIcon}
            alt={`User uploaded icon`}
            className="selected-icon"
          />
        );
      }
      return null;
    }
    return null;
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
    fileInputRef.current.value = null;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setError({...error, iconError: ''})
    const reader = new FileReader();

    reader.onload = () => {
      const uploadedIcon = reader.result; // Contiene la URL del icono subido
      // Actualiza el estado con el ícono subido o haz lo necesario para mostrar la vista previa
      setSelectedIcon(uploadedIcon);
    };

    if (file) {
      reader.readAsDataURL(file);
      // Aquí puedes realizar la lógica para subir el archivo al servidor si es necesario
    }
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
                onClick={() => {
                  setFormState({
                    title: "",
                    description: "",
                    idMundo: 1,
                  });
                  setSelectedIcon(iconMap[1])
                }}
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
                    <div className="d-flex justify-content-center">
                      {loadSelectedIcon()} {/* Muestra el ícono seleccionado */}
                    </div>
                    <div className="text-center" style={{width: '100%'}}>
                      <em>
                        <small className="">{error.iconError}</small>
                      </em>
                    </div>
                    <div className="d-flex justify-content-center pt-3">
                      <SubirIconoNuevo />
                      <button 
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={handleFileButtonClick}
                      >
                        Subir Icono
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        accept=".svg, .png, .jpg, .jpeg"
                        onChange={handleFileUpload}
                      />
                    </div>
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
                        setError({...error, iconError: ''})
                        setFile(null)
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
              <button className="btn btn-primary" onClick={handleCrear}>
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalConfPlaylist />
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
