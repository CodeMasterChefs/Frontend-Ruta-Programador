import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from "../../config/site.config";

function EliminarPlaylist({IdPlaylist, show, handleClose}) {
    
    const handleDelete = async () => {
        try {
            const response = await api.remove("playlist?idPlaylist=" + IdPlaylist)
          // await axios.delete(`URL_DE_TU_API/${itemId}`);
          console.log(response)
          window.location.reload();
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

export default EliminarPlaylist;