import React, { useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from "react-bootstrap/Button";
import AddHospitalExperienceModal from "./addHospitalExperienceModal";
import EditIcon from "../edit-24px.svg";
import EditHospitalExperienceModal from "./editHospitalExperienceModal";
import DeleteHospitalExperienceModal from "./deleteHospitalExperienceModal";

const HospitalExperiences = () => {
  const { addHospitalExperience, state } = useContext(experiencesContext);
  const hospitalExperiencesList = state.hospitalExperiences.map(
    (exp, index) => {
      return (
        <div style={{ flexDirection: "row" }}>
          <li style={{ display: "inline" }}> {`\u2022 ${exp}`} </li>{" "}
          {/* <img src={EditIcon} onClick={() => {console.log('edit clicked')}} ></img> */}{" "}
          <EditHospitalExperienceModal experience={exp} expIndex={index} />{" "}
          <DeleteHospitalExperienceModal experience={exp} expIndex={index} />{" "}
        </div>
      );
    }
  );
  return (
    <div>
      <ul style={{ marginTop: "40px" }}> {hospitalExperiencesList} </ul>{" "}
      {/* <Button variant="primary" style={{margin: 'auto', marginTop: '16px'}} >Add New</Button> */}{" "}
      <AddHospitalExperienceModal />
    </div>
  );
};

export default HospitalExperiences;
