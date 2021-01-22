import React, { useState, useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import EditIcon from "../edit-24px.svg";

const EditProfessionalPositionsModal = (props) => {
  const { editProfessionalPositions, state } = useContext(experiencesContext);
  const [professionalPosition, setProfessionalPosition] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={EditIcon} onClick={handleShow}></img>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit professional position </Modal.Title>{" "}
        </Modal.Header>{" "}
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="professionalPosition">
              <Form.Control
                type="text"
                placeholder={props.experience}
                value={professionalPosition}
                onChange={(event) => {
                  setProfessionalPosition(event.target.value);
                }}
              />{" "}
            </Form.Group>{" "}
          </Form>{" "}
        </Modal.Body>{" "}
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              editProfessionalPositions(professionalPosition, props.expIndex);
              handleClose();
            }}
          >
            Save{" "}
          </Button>{" "}
          <Button variant="danger" onClick={handleClose}>
            Cancel{" "}
          </Button>{" "}
        </Modal.Footer>{" "}
      </Modal>{" "}
    </>
  );
};

export default EditProfessionalPositionsModal;
