import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export const ModalConf = ({
  Texto = "Texto",
  TxtButton = "Button",
  ide = "ide",
}) => {
  //navigate = useNavigate();
  return (
    <>
      <div
        className="modal fade"
        id={ide}
        data-bs-backdrop="static" data-bs-keyboard="false"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="p-0 modal-body d-flex justify-content-center">
              <p className="mt-3 pt-3 mb-2">{Texto}</p>
            </div>
            <div className="d-flex justify-content-center">
              <div className="p-2">
                <button
                  className="btn btn-primary btn-small"
                  onClick={() => window.location.reload(false)}
                  data-bs-dismiss="modal"
                >
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
};
