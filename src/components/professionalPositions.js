import React, { useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from "react-bootstrap/Button";
import AddProfessionalPositionModal from "./AddProfessionalPositionModal";
import EditIcon from "../edit-24px.svg";
import EditProfessionalPositionsModal from "./editProfessionalPositionsModal";
import DeleteProfessionalPositionModal from "./deleteProfessionalPositionModal";

const ProfessionalPositions = () => {
  const { addProfessionalPositions, state } = useContext(experiencesContext);
  const professionalPositionsList = state.professionalPositions.map(
    (exp, index) => {
      return (
        <div style={{ flexDirection: "row" }}>
          <li style={{ display: "inline" }}> {`\u2022 ${exp}`} </li>{" "}
          {/* <img src={EditIcon} onClick={() => {console.log('edit clicked')}} ></img> */}{" "}
          <EditProfessionalPositionsModal experience={exp} expIndex={index} />{" "}
          <DeleteProfessionalPositionModal experience={exp} expIndex={index} />{" "}
        </div>
      );
    }
  );
  return (
    <div>
      <ul style={{marginTop: '40px'}}> {professionalPositionsList} </ul>{" "}
      {/* <Button variant="primary" style={{margin: 'auto', marginTop: '16px'}} >Add New</Button> */}{" "}
      <AddProfessionalPositionModal />
    </div>
  );
};

export default ProfessionalPositions;
