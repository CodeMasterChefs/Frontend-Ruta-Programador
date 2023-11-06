const CancelarRegistro = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary mx-2"
        data-bs-toggle="modal"
        data-bs-target="#modalCancelarRegistro"
        data-bs-whatever="@mdo"
        onClick={(event) => event.preventDefault()}
      >
        Cancelar
      </button>
      <div className="modal fade" id="modalCancelarRegistro" tabIndex="-1">
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
                ¿Estás seguro que desea cancelar?
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace("/iniciar-sesion");
                }}
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
export default CancelarRegistro;
