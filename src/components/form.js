import React, { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import PersonalDetailsForm from "./PersonalDetailsForm";
import ControlledTabs from "./Tabs";
import Alert from "react-bootstrap/Alert";
import { Context as experiencesContext } from "../context/experiencesContext";
import { Context as personalDetailsContext } from "../context/personalDetailsContext";

const Form = (props) => {
  const personalDetails = useContext(personalDetailsContext);
  const experiences = useContext(experiencesContext);

  const hospitalExperiencesList = experiences.state.hospitalExperiences.map(
    (exp, index) => {
      return (
        <div style={{ flexDirection: "row" }}>
          <li style={{ display: "inline" }}> {`\u2022 ${exp}`} </li>{" "}
        </div>
      );
    }
  );

  const specialAssignmentsServedList = experiences.state.specialAssignmentsServed.map(
    (exp, index) => {
      return (
        <div style={{ flexDirection: "row" }}>
          <li style={{ display: "inline" }}> {`\u2022 ${exp}`} </li>{" "}
        </div>
      );
    }
  );

  const professionalPositionsList = experiences.state.professionalPositions.map(
    (exp, index) => {
      return (
        <div style={{ flexDirection: "row" }}>
          <li style={{ display: "inline" }}> {`\u2022 ${exp}`} </li>{" "}
        </div>
      );
    }
  );

  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Personal Details
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <PersonalDetailsForm />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Professional Experiences
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ControlledTabs />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Medical License
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Alert variant="success">
              <Alert.Heading>
                Below is the info you have entered
              </Alert.Heading>
              <h3> Personal Details </h3>
              <ul>
                <li> First name - {personalDetails.state.firstName} </li>
                <li> Middle name - {personalDetails.state.middleName} </li>
                <li> Last name - {personalDetails.state.lastName} </li>
                <li> Date of birth - {personalDetails.state.dateOfBirth} </li>
                <li> Gender - {personalDetails.state.gender} </li>
              </ul>
              <hr />
              <h3> Professional Experiences </h3>
              <ul>
                <li>
                  <h4> Hospital Experiences </h4>
                  <ul style={{ marginTop: "16px" }}>
                    
                    {hospitalExperiencesList}{" "}
                  </ul>
                </li>
                <li>
                  <h4> Special Assignments Served </h4>
                  <ul style={{ marginTop: "16px" }}>
                    
                    {specialAssignmentsServedList}
                  </ul>
                </li>
                <li>
                  <h4> Professional Positions held </h4>
                  <ul style={{ marginTop: "16px" }}>
                    
                    {professionalPositionsList}
                  </ul>
                </li>
              </ul>
            </Alert>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Form;
