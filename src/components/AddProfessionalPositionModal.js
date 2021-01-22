import React, { useState, useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const AddProfessionalPositionModal = () => {
  const { addProfessionalPositions, state } = useContext(experiencesContext);
  const [professionalPosition, setProfessionalPosition] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        style={{ margin: "auto", marginTop: "16px" }}
        onClick={handleShow}
      >
        Add new
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter new professional position</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="professionalPosition">
              <Form.Control
                type="text"
                placeholder="Enter professional position"
                value={professionalPosition}
                onChange={(event) => {
                    setProfessionalPosition(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
                addProfessionalPositions(professionalPosition);
              handleClose();
            }}
          >
            Save
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProfessionalPositionModal;
