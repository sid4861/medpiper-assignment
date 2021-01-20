import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Context as personalDetailsContext } from "../context/personalDetailsContext";

const PersonalDetailsForm = () => {
  const {
    inputFirstName,
    inputMiddleName,
    inputLastName,
    inputDateOfBirth,
    inputGender,
    state,
  } = useContext(personalDetailsContext);

//   const clickHandler = () => {
//     console.log(
//       state.firstName,
//       state.middleName,
//       state.lastName,
//       state.dateOfBirth,
//       state.gender
//     );
//   };

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={state.firstName}
            onChange={(event) => {
              inputFirstName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridMiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter middle name"
            value={state.middleName}
            onChange={(event) => {
              inputMiddleName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={state.lastName}
            onChange={(event) => {
              inputLastName(event.target.value);
            }}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridDob">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="dd/mm/yy"
            onChange={(event) => {
              inputDateOfBirth(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridGender">
          <Form.Label>Gender</Form.Label>
          <div key="custom-inline-radio" className="mb-3">
            <Form.Check
              custom
              inline
              label="Male"
              type="radio"
              id="custom-inline-radio-1"
              value="Male"
              checked={state.gender === "Male"}
              onChange={(e) => inputGender(e.currentTarget.value)}
            />
            <Form.Check
              custom
              inline
              label="Female"
              type="radio"
              id="custom-inline-radio-2"
              value="Female"
              checked={state.gender === "Female"}
              onChange={(e) => inputGender(e.currentTarget.value)}
            />
          </div>
        </Form.Group>
      </Form.Row>
      {/* <Button onClick={clickHandler}> Display</Button> */}
    </Form>
  );
};

export default PersonalDetailsForm;
