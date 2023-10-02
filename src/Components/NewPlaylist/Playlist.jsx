import "./Playlist.css"
import Button from "../Button/Button";
import { Planet } from "../IconPlanet/Planet";
const Playlist = () => {
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
                <div>
                  <Planet />
                  <select className="form-select">
                    <option>Selecciona un Planeta</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <Button Letra="Aceptar" Direccion="#exampleModalToggle2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Playlist;
