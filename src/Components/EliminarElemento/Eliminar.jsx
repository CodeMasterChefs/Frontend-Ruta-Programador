import { ModalConf } from "../ModalConfirmacion/ModalConf"
export const Eliminar = () => {
  return (
    <>
    <div>
      <ModalConf Texto="El video “Título de video” se eliminó correctamente de tu Playlist"ide="ModalConfirmacionEliminar"/>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EliminarModal" data-bs-whatever="@fat">Boton de Elminar</button>


      <div className="modal fade" id="EliminarModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                <label htmlFor="basic-url" className="form-label">¿Estás seguro de eliminar este video de tu playlist?</label>
                  <form className="form-floating">
                        <img src="..." className="img-thumbnail" alt="..."/>
                  </form>
                </div>
              </form>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary" data-bs-target="#ModalConfirmacionEliminar" data-bs-toggle="modal"type="submit">Eliminar</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
