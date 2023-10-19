import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from "../../config/site.config";
import "./EliminarPlaylist.css"

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
                <Modal.Header closeButton className="border-secondary mx-2" data-bs-theme="dark" >
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center body-text">¿Estás seguro de eliminar esta playlist de tu colección?</Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button className="btn btn-prymary btn-delete" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EliminarPlaylist;