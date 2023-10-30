import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from "../../config/site.config";
import "./EliminarPlaylist.css"

function EliminarPlaylist({ IdPlaylist, show, handleClose, refrescar }) {

    const handleDelete = async () => {
        try {
            const response = await api.remove("playlist?idPlaylist=" + IdPlaylist)
            console.log(response)
            refrescar == 1 ? window.location.reload() : window.history.back();
        } catch (error) {
            console.error('Error al eliminar el elemento:', error);
        }
    };

    return (
        <>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton className="border-secondary mx-2" data-bs-theme="dark" >
                </Modal.Header>
                <Modal.Body className="d-flex flex-column body-text">
                    <div className="d-flex justify-content-center">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.884 2.532C12.538 1.878 11.462 1.878 11.116 2.532L2.11596 19.532C2.03494 19.6844 1.99478 19.8551 1.99938 20.0276C2.00398 20.2001 2.05319 20.3685 2.14221 20.5164C2.23124 20.6642 2.35704 20.7864 2.50736 20.8712C2.65768 20.956 2.82739 21.0003 2.99996 21H21C21.1724 21.0004 21.342 20.956 21.4922 20.8713C21.6424 20.7866 21.7681 20.6644 21.8571 20.5167C21.946 20.3689 21.9951 20.2006 21.9997 20.0282C22.0042 19.8559 21.964 19.6852 21.883 19.533L12.884 2.532ZM13 18H11V16H13V18ZM11 14V9H13L13.001 14H11Z"
                                fill="#FFFF00"
                            />
                        </svg>
                    </div>
                    <div className="d-flex justify-content-center">
                        ¿Estás seguro de eliminar esta playlist de tu colección?
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button className="btn btn-prymary btn-delete" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

EliminarPlaylist.propTypes = {
    IdPlaylist: PropTypes.number.isRequired,
    show: PropTypes.any.isRequired,
    handleClose: PropTypes.func.isRequired,
    refrescar: PropTypes.number.isRequired
};

export default EliminarPlaylist;