import "./Playlist.css";
import { useState } from "react";
import { Planet } from "../IconPlanet/Planet";
import api from "../../config/site.config";
//import { Navigate } from "react-router-dom";

const Playlist = () => {
  const [planetSelected, setPlanetSelected] = useState("");
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    idMundo: 1,
  });
  const { title, description } = formState;
  const [error, setError] = useState({
    titleError: "",
    descriptionError: "",
  });

  const onInpuntChange = ({ target }) => {
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
      })
      .catch((error) => {
        setError({
          titleError: error.response.data.errors.tituloPlaylist[0],
          descriptionError: error.response.data.errors.descripcionPlaylist[0],
        });
      });
  };
  const handleCrear = (event) => {
    event.preventDefault();
    fetchData();
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
        data-bs-whatever="@mdo"
      >
        Nueva Playlist
      </button>

      <div className="modal fade" id="exampleModal1" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" data-bs-theme="dark">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Crear una nueva Playlist
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
                    Dale un nombre a tu Playlist:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="title"
                    value={title}
                    onInput={onInpuntChange}
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
                    onInput={onInpuntChange}
                  ></textarea>
                  <em>
                    <small>{error.descriptionError}</small>
                  </em>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <Planet planetIcon={planetSelected} />
                    {planetSelected}
                  </div>
                  <div className="col-auto" data-bs-theme="dark">
                    <select
                      className="form-select"
                      value={planetSelected}
                      onChange={(e) => {
                        setPlanetSelected(e.target.value);
                      }}
                    >
                      <option value="the moon">The moon</option>
                      <option value="the earth">The earth</option>
                      <option value="uranus">Uranus</option>
                      <option value="neptune">Neptune</option>
                      <option value="mars">Mars</option>
                      <option value="haumea">Haumea</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleCrear}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Playlist;
