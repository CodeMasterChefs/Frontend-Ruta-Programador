import React from 'react'

const ModalConfEdit = () => {
  return (
    <>
      <div
        className="modal fade"
        id='ModalConfirmacionEdicionP'
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="p-0 modal-body d-flex justify-content-center">
              <p className="mt-3 pt-3 mb-2">Tu playlist ha sido modificada con éxito.</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="p-2">
                <button
                  className="btn btn-primary btn-small"
                  onClick={() => window.location.reload()}
                  data-bs-dismiss="modal"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalConfEdit