import "./Playlist.css";
import { useState, useEffect } from "react";
// import { Planet } from "../IconPlanet/Planet";
import { Navigate } from "react-router-dom";

const iconMap = {
  "the moon": "moon.svg",
  "the earth": "earth.svg",
  uranus: "uranus.svg",
  neptune: "neptune.svg",
  mars: "mars.svg",
  haumea: "haumea.svg",
};

const Playlist = () => {
  const [planetSelected, setPlanetSelected] = useState("the moon");
  const [selectedIcon, setSelectedIcon] = useState(iconMap["the moon"]);

  const handleCrear = () => {
    Navigate();
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
        data-bs-target="#exampleModal1"
        data-bs-whatever="@mdo"
      >
        Nueva Playlist
      </button>

      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
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
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Añade una descripción a tu Playlist:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-auto">
                    {loadSelectedIcon()} {/* Muestra el ícono seleccionado */}
                    {/* {planetSelected} */}
                  </div>
                  <div className="col-auto">
                    <select
                      className="form-select"
                      value={planetSelected}
                      onChange={(e) => {
                        const selected = e.target.value;
                        setPlanetSelected(selected);
                        setSelectedIcon(iconMap[selected]); // Asigna el nombre del ícono
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
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                onClick={handleCrear}
              >
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
