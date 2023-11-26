import PropTypes from "prop-types";

import "../NewPlaylist/Playlist.css";
import { useState, useEffect, useRef } from "react";
import api from "../../config/site.config";
import { ModalConf } from "../ModalConfirmacion/ModalConf";
import { useLocation } from "react-router-dom";
import ModalConfEdit from "../ModalConfirmacion/ModalConfEdit";
import { SubirIconoNuevo } from "../icons";

const iconMap = {
  1: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/moon.svg",
  2: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/earth.svg",
  3: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/uranus.svg",
  4: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/neptune.svg",
  5: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/mars.svg",
  6: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/haumea.svg",
  7: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/JavaFile.svg",
  8: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/Java.svg",
  9: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/JavaConsole.svg",
  10: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/JavaIcon2.svg",
  11: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/JavaFile3.svg",
  12: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/JavaFile4.svg",
  13: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/JavaFileClass.svg",
  14: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/JavaConsole2.svg",
  15: "https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/JavaProject.svg",
};

const EditarPlaylist = ({ IdPlaylist, actualizarPlaylist}) => {
  const [planetSelected, setPlanetSelected] = useState();
  const [selectedIcon, setSelectedIcon] = useState();
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    idMundo: planetSelected,
    iconoMundo: '',
  });
  const { title, description, idMundo } = formState;
  const [error, setError] = useState({
    titleError: "",
    descriptionError: "",
    iconError: "",
  });
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const location = useLocation();
  const [buttonConf, setButtonConf] = useState('');
  // Llamar a fetchData cuando se monta el componente
  useEffect(() => {
    const fetchDataPlaylist = async () => {
      const response = await api.get(`/playlist/valores/${IdPlaylist}`);
      const { tituloPlaylist, descripcionPlaylist, idMundo, iconoMundo } = response.data[0];
      const originalValues = {
        title: tituloPlaylist,
        description: descripcionPlaylist,
        idMundo: idMundo,
        iconoMundo: iconoMundo,
      };
      setFormState(originalValues);
      //setSelectedIcon(iconoMundo)
      if(formState.idMundo > 15){
        setSelectedIcon(`https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/${formState.iconoMundo}`); // Se ejecutará una vez al montar el componente
        setPlanetSelected(null)
      }else{
        setSelectedIcon(iconMap[formState.idMundo])
      }

      const modalElement = document.getElementById("modalEditarPlaylist");
      modalElement.addEventListener("show.bs.modal", () => {
        setFormState(originalValues);
      });
    };

    fetchDataPlaylist();
  }, [IdPlaylist]);

  useEffect(() => {
    if(formState.idMundo > 15){
      setSelectedIcon(`https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/${formState.iconoMundo}`); // Se ejecutará una vez al montar el componente
      setPlanetSelected(null)
    }else{
      setSelectedIcon(iconMap[formState.idMundo])
    }
  }, [formState.idMundo]);

  useEffect(() => {
    if (location.pathname === '/mis_playlists') {
      setButtonConf('#ModalConfirmacionEdicionP')
    } else {
      setButtonConf('#ModalConfirmacionEdicion')
    }
  }, [location])

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setError({
      titleError: "",
      descriptionError: "",
      iconError: ''
    });
  };

  const fetchData = async () => {
    if(!error.titleError && !error.descriptionError && !error.iconError){

      const resetFormAndError = () => {
        setFormState({
          title: "",
          description: "",
          idMundo: 0,
        });
        setError({
          titleError: "",
          descriptionError: "",
          iconError: ''
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
  
      const formData = new FormData();
      let queryParams = {};
  
      if (file) {
        formData.append("iconoPersonalizado", file);
        queryParams = {
          idPlaylist: IdPlaylist,
        };
      } else {
        queryParams = {
          idMundo: formState.idMundo,
          idPlaylist: IdPlaylist,
        };
      }
  
      if(!errors.titleError && !errors.descriptionError){
        try {
          await api.post("playlist/icono", formData, {
            params: queryParams,
          });
        } catch (error) {
          console.log(error.response)
          if (error.response && error.response.data) {
            errors.iconoError =
              error.response.data.errors?.iconoPersonalizado?.[0] || "";
          }
        }
      }
      
      // Actualizamos el estado de errores con el objeto de errores
      setError({
        titleError: errors.titleError,
        descriptionError: errors.descriptionError,
        iconError: errors.iconoError,
      });
  
      // Solo recargamos la página si no hay errores
      if (!errors.titleError && !errors.descriptionError && !errors.iconoError) {
        resetFormAndError();
        document.getElementById("btnModalConfirm").click();
      }
    }
  };

  const handleEditar = async (event) => {
    event.preventDefault();
    await fetchData();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

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

    // Verificar si se seleccionó un archivo
    if (!file) {
      return;
    }

    setFile(file);
    setError({ ...error, iconError: "" });

    const reader = new FileReader();

    reader.onload = () => {
      const uploadedIcon = reader.result; // Contiene la URL del icono subido
      // Actualiza el estado con el ícono subido o haz lo necesario para mostrar la vista previa
      setSelectedIcon(uploadedIcon);
      // Verificar el tamaño del archivo (en bytes)
      const maxSizeInBytes = 1024 * 1024; // 1MB
      if (file.size > maxSizeInBytes) {
        setError({
          ...error,
          iconError:
            "El ícono personalizado no debe exceder 1MB.",
        });
        // Limpiar el input de archivo si es necesario
        return;
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      {location.pathname === "/mis_playlists" ? (
        <ModalConfEdit />
      ) : (
        <ModalConf
          Texto="Tu playlist ha sido modificada con éxito."
          ide="ModalConfirmacionEdicion"
          TxtButton="Aceptar"
          handleButton={actualizarPlaylist}
        />
      )}
      <button
        type="button"
        className="btn btn-primary btn-confirm-modal"
        data-bs-toggle="modal"
        data-bs-target={buttonConf}
        id="btnModalConfirm"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>
      <div className="modal fade" id="modalEditarPlaylist" tabIndex="-1" data-bs-backdrop="static">
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
                onClick={() => {
                  setSelectedIcon(`https://backend-rutadelprogramador-production.up.railway.app/storage/iconoMundos/${formState.iconoMundo}`)
                  setError({titleError: "",
                  descriptionError: "",
                  iconError: ''})
                }}
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
                  <div className="col-6">
                    <div className="d-flex justify-content-center">
                      {loadSelectedIcon()} {/* Muestra el ícono seleccionado */}
                    </div>
                    <div className="d-flex justify-content-center pt-3">
                      <SubirIconoNuevo />
                      <button
                        type="button"
                        className="btn btn-special mx-2"
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
                    <div className="text-center" style={{width: '100%'}}>
                      <em>
                        <small className="">{error.iconError}</small>
                      </em>
                    </div>
                  </div>
                  <div className="col-5" data-bs-theme="dark">
                    <p className="col-form-label">Selecciona un ícono</p>
                    <select
                      className="form-select custom-option custom-scrollbar"
                      value={idMundo}
                      size={6}
                      onChange={(e) => {
                        const selected = e.target.value;
                        setPlanetSelected(selected);
                        setSelectedIcon(iconMap[selected]); // Asigna el nombre del ícono
                        setFormState({
                          ...formState,
                          idMundo: selected,
                        });
                        setFile(null)
                      }}
                    >                      
                      <option style={{ display: 'none' }} value="-1">Selecciona</option>
                      <option value="1">The moon</option>
                      <option value="2">The earth</option>
                      <option value="3">Uranus</option>
                      <option value="4">Neptune</option>
                      <option value="5">Mars</option>
                      <option value="6">Haumea</option>
                      <option value="7">Java File</option>
                      <option value="8">Java Coffee</option>
                      <option value="9">Java Console</option>
                      <option value="10">Java Logo</option>
                      <option value="11">Java Code</option>
                      <option value="12">Java Tea</option>
                      <option value="13">Java Diagram</option>
                      <option value="14">Java Web</option>
                      <option value="15">Java Project</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">

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
