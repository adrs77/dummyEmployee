import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Form from "../form/Form";

export default function ModalWrapper({ buttonClass, addUser }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={buttonClass} onClick={handleShow}>
        ADD EMPLOYEE
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form addUser={addUser} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
