import React, { useState, useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const AddHospitalExperienceModal = () => {
  const { addHospitalExperience, state } = useContext(experiencesContext);
  const [hospitalExperience, setHospitalExperience] = useState("");

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
          <Modal.Title>Please enter new hospital experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="hospitalExperience">
              <Form.Control
                type="text"
                placeholder="Enter hospital experience"
                value={hospitalExperience}
                onChange={(event) => {
                  setHospitalExperience(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              addHospitalExperience(hospitalExperience);
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

export default AddHospitalExperienceModal;
