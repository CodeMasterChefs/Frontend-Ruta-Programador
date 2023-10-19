import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from "../../config/site.config";

function EliminarPlaylist({ IdPlaylist, show, handleClose, refrescar}) {

    const handleDelete = async () => {
        try {
            const response = await api.remove("playlist?idPlaylist=" + IdPlaylist)
            // await axios.delete(`URL_DE_TU_API/${itemId}`);
            console.log(response)
            refrescar ==1 ? window.location.reload() : window.history.back();
            //onDelete(itemId);
        } catch (error) {
            console.error('Error al eliminar el elemento:', error);
        }
    };

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>¿Estás seguro de eliminar esta playlist de tu colección?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
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