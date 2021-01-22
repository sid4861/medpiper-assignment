import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import HospitalExperiences from "./hospitalExperiences";
import SpecialAssignmentsServed from "./specialAssignmentsServed";
import ProfessionalPositions from "./professionalPositions";

const ControlledTabs = () => {
  const [key, setKey] = useState("hospital-experiences");

  return (
    <Tabs id="controlled-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab eventKey="hospital-experiences" title="hospital-experiences">
        <HospitalExperiences />
      </Tab>{" "}
      <Tab
        eventKey="special-assignments-served"
        title="special-assignments-served"
      >
        <SpecialAssignmentsServed />
      </Tab>{" "}
      <Tab eventKey="professional-positions" title="professional-positions">
        <ProfessionalPositions />
      </Tab>{" "}
    </Tabs>
  );
};

export default ControlledTabs;
