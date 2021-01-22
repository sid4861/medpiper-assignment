import React, { useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from 'react-bootstrap/Button';
import AddHospitalExperienceModal from './addHospitalExperienceModal';
import EditIcon from '../edit-24px.svg';

const HospitalExperiences = () => {
  const { addHospitalExperience, state } = useContext(experiencesContext);
  const hospitalExperiencesList = state.hospitalExperiences.map((exp, index) => {
      return (
          <div style={{flexDirection: 'row'}}>
             <li style={{display: 'inline'}}> 
                {exp} 
            </li>
            <img src={EditIcon} onClick={() => {console.log('edit clicked')}} ></img>
          </div>
     );
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
