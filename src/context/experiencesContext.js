import createDataContext from "./createDataContext";

const experiencesReducer = (state, action) => {
  switch (action.type) {
    case "add_hospital_experience":
      return { ...state, firstName: action.payload };
    case "add_special_assignment_served":
      return { ...state, middleName: action.payload };
    case "add_professional_position":
      return { ...state, lastName: action.payload };
    default:
      return state;
  }
};

const addHospitalExperience = (dispatch) => {
  return (firstName) => {
    dispatch({ type: "input_first_name", payload: firstName });
  };
};

const addSpecialAssignmentServed = (dispatch) => {
  return (middleName) => {
    dispatch({ type: "input_middle_name", payload: middleName });
  };
};

const addProfessionalPositions = (dispatch) => {
  return (lastName) => {
    dispatch({ type: "input_last_name", payload: lastName });
  };
};

export const { Context, Provider } = createDataContext(
  experiencesReducer,
  {
    addHospitalExperience,
    addSpecialAssignmentServed,
    addProfessionalPositions,
  },
  {
    hospitalExperiences: ["sjfhslhfsljdf", "jdfksjdfkjdsf", "kjadfksjdfkjdf"],
    specialAssignmentsServed: [],
    professionalPositions: [],
  }
);
