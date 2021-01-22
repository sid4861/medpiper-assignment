import React, { useState } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import HospitalExperiences from './hospitalExperiences';

const ControlledTabs = () => {
  const [key, setKey] = useState("hospital-experiences");

  return (
    <Tabs
      id="controlled-tab"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="hospital-experiences" title="hospital-experiences">
        <HospitalExperiences />
      </Tab>
      <Tab eventKey="special-assignments-served" title="special-assignments-served">
        hi
      </Tab>
      <Tab eventKey="professional-positions" title="professional-positions">
        hi
      </Tab>
    </Tabs>
  );
};

export default ControlledTabs;
