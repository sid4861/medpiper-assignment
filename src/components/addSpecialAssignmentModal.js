import React, { useState, useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const AddSpecialAssignmentModal = () => {
  const { addSpecialAssignmentServed, state } = useContext(experiencesContext);
  const [specialAssignment, setSpecialAssignment] = useState("");

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
          <Modal.Title>Please enter new special assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="hospitalExperience">
              <Form.Control
                type="text"
                placeholder="Enter special assignment"
                value={specialAssignment}
                onChange={(event) => {
                    setSpecialAssignment(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
                addSpecialAssignmentServed(specialAssignment);
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

export default AddSpecialAssignmentModal;
