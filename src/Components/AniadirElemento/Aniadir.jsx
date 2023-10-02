import { ModalConf } from '../ModalConfirmacion/ModalConf'

export const Aniadir = () => {
  return (
    <div>
      <ModalConf Texto="Tu video fue agregado correctamente, revisa hasta el final de tu Playlist para encontrarlo" ide= "ModalConfirmacionAniadir"/>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AniadirModal" data-bs-whatever="@fat">Boton de añadir</button>


      <div className="modal fade" id="AniadirModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                <label htmlFor="basic-url" className="form-label">Ingresa la URL del video que quieras añadir a tu playlist</label>
                  <label htmlFor="message-text" className="col-form-label"></label>
                  <form className="form-floating">
                    <div className="input-group mb-3">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Enlace</span>
                        <input type="text" className="form-control" placeholder="URL" aria-label="URL" aria-describedby="basic-addon1"/>
                      </div>
                    </div>
                  </form>
                </div>
              </form>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary" data-bs-target="#ModalConfirmacionAniadir" data-bs-toggle="modal"type="submit">Añadir</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
  )
}
