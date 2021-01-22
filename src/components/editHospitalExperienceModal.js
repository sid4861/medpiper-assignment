import React, { useState, useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import EditIcon from "../edit-24px.svg";

const EditHospitalExperienceModal = (props) => {
  const { editHospitalExperience, state } = useContext(experiencesContext);
  const [hospitalExperience, setHospitalExperience] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={EditIcon} onClick={handleShow}></img>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Edit hospital experience </Modal.Title>{" "}
        </Modal.Header>{" "}
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="hospitalExperience">
              <Form.Control
                type="text"
                placeholder={props.experience}
                value={hospitalExperience}
                onChange={(event) => {
                  setHospitalExperience(event.target.value);
                }}
              />{" "}
            </Form.Group>{" "}
          </Form>{" "}
        </Modal.Body>{" "}
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              editHospitalExperience(hospitalExperience, props.expIndex);
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

export default EditHospitalExperienceModal;
