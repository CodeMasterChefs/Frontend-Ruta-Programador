import React from "react";

const ConfirmarRegistro = ({ data }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalConfirmarRegistro"
        data-bs-whatever="@mdo"
        onClick={(event) => event.preventDefault()}
      >
        Registrar
      </button>
      <div className="modal fade" id="modalConfirmarRegistro" tabIndex="-1">
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
              ></button>
            </div>
            <div className="p-0 modal-body d-flex justify-content-center">
              <p className="mt-3 pt-3 mb-0">
                ¿Está seguro de que sus datos se introdujeron correctamente?
              </p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={(e) => {}}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmarRegistro;
