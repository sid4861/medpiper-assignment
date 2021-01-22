import React, { useState, useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import DeleteIcon from "../delete-24px.svg";

const DeleteHospitalExperienceModal = (props) => {
  const { deleteHospitalExperience, state } = useContext(experiencesContext);
  const [hospitalExperience, setHospitalExperience] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={DeleteIcon} onClick={handleShow}>
      </img>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Deleting hospital experience </Modal.Title>{" "}
        </Modal.Header>{" "}
        <Modal.Body>
          <Form>
            <Form.Group as={Col} controlId="hospitalExperience">
              <Form.Control
                type="text"
                placeholder={props.experience}
                value={hospitalExperience}
                disabled
              />{" "}
            </Form.Group>{" "}
          </Form>{" "}
        </Modal.Body>{" "}
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              deleteHospitalExperience(props.experience, props.expIndex);
              handleClose();
            }}
          >
            Comfirm{" "}
          </Button>{" "}
          <Button variant="danger" onClick={handleClose}>
            Cancel{" "}
          </Button>{" "}
        </Modal.Footer>{" "}
      </Modal>{" "}
    </>
  );
};

export default DeleteHospitalExperienceModal;
