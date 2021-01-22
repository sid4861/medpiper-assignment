import React, { useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from 'react-bootstrap/Button';
import AddHospitalExperienceModal from './addHospitalExperienceModal';

const HospitalExperiences = () => {
  const { addHospitalExperience, state } = useContext(experiencesContext);
  const hospitalExperiencesList = state.hospitalExperiences.map((exp) => {
      return <li> {exp} </li>;
  });
  return (
    <div>
      <ul>
        {hospitalExperiencesList}
      </ul>
      {/* <Button variant="primary" style={{margin: 'auto', marginTop: '16px'}} >Add New</Button> */}
      <AddHospitalExperienceModal/>
    </div>
  );
};

export default HospitalExperiences;
