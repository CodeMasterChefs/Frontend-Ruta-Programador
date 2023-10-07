import { ModalConf } from "../ModalConfirmacion/ModalConf";
export const Eliminar = () => {
  return (
    <>
      <div>
        <ModalConf
          Texto="El video “Título de video” se eliminó correctamente de tu Playlist"
          ide="ModalConfirmacionEliminar"
        />

        <div
          className="modal fade"
          id="EliminarModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header p-2 mx-2  border-bottom border-secondary">
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
                      ¿Estás seguro de eliminar este video de tu playlist?
                    </label>
                    <div className="form-floating">
                      <img src="..." className="img-thumbnail" alt="..." />
                    </div>
                  </div>
                </form>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary"
                    data-bs-target="#ModalConfirmacionEliminar"
                    data-bs-toggle="modal"
                    type="submit"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
