// src/views/TeamsPage/DeleteButton.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteButton = ({ teamName, onDelete }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleDelete = () => {
        onDelete(teamName);
        handleClose();
    };

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                <FontAwesomeIcon icon={faTrash} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete {teamName}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={handleDelete}>Delete Team</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteButton;

