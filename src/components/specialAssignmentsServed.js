import React, { useContext } from "react";
import { Context as experiencesContext } from "../context/experiencesContext";
import Button from "react-bootstrap/Button";
import AddSpecialAssignmentModal from "./addSpecialAssignmentModal";
import EditIcon from "../edit-24px.svg";
import EditSpecialAssignmentModal from "./editSpecialAssignmentModal";
import DeleteSpecialAssignmentModal from "./deleteSpecialAssignmentModal";

const SpecialAssignmentsServed = () => {
  const { addSpecialAssignmentServed, state } = useContext(experiencesContext);
  const specialAssignmentsServedList = state.specialAssignmentsServed.map(
    (exp, index) => {
      return (
        <div style={{ flexDirection: "row" }}>
          <li style={{ display: "inline" }}> {exp} </li>{" "}
          {/* <img src={EditIcon} onClick={() => {console.log('edit clicked')}} ></img> */}{" "}
          <EditSpecialAssignmentModal experience={exp} expIndex={index} />{" "}
          <DeleteSpecialAssignmentModal experience={exp} expIndex={index} />{" "}
        </div>
      );
    }
  );
  return (
    <div>
      <ul> {specialAssignmentsServedList} </ul>{" "}
      {/* <Button variant="primary" style={{margin: 'auto', marginTop: '16px'}} >Add New</Button> */}{" "}
      <AddSpecialAssignmentModal />
    </div>
  );
};

export default SpecialAssignmentsServed;
