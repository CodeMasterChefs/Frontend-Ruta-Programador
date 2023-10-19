import PropTypes from "prop-types"
export const ModalConf = ({ Texto = "Texto", TxtButton = "Button", ide = "ide"}) => {
  return (
    <>
      <div
        className="modal fade"
        id={ide}
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body d-flex justify-content-center">
              <p className="mt-3 pt-3">{Texto}</p></div>
            <div className="d-flex flex-row-reverse">
              <div className="p-2">
                <button className="btn btn-primary" onClick = {() => window.location.reload()} data-bs-dismiss="modal">
                  {TxtButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ModalConf.propTypes = {
  Texto: PropTypes.string.isRequired,
  TxtButton: PropTypes.string.isRequired,
  ide: PropTypes.string.isRequired,
}