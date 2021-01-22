import createDataContext from "./createDataContext";

const experiencesReducer = (state, action) => {
  switch (action.type) {
    case "add_hospital_experience":
      return {
        ...state,
        hospitalExperiences: [...state.hospitalExperiences, action.payload],
      };
    case "edit_hospital_experience":
      return {
        ...state,
        hospitalExperiences: Object.assign([], state.hospitalExperiences, {[action.payload.index]: action.payload.hospitalExperience})
      };
    case "delete_hospital_experience":
      return { ...state, hospitalExperiences: [...state.hospitalExperiences.filter(item => item !== action.payload.hospitalExperience)] };
    case "add_special_assignment_served":
      return { ...state, middleName: action.payload };
    case "add_professional_position":
      return { ...state, lastName: action.payload };
    default:
      return state;
  }
};

const addHospitalExperience = (dispatch) => {
  return (hospitalExperience) => {
    dispatch({ type: "add_hospital_experience", payload: hospitalExperience });
  };
};

const editHospitalExperience = (dispatch) => {
  return (hospitalExperience, index) => {
    //   console.log(hospitalExperience, index);
    dispatch({
      type: "edit_hospital_experience",
      payload: {
        hospitalExperience: hospitalExperience,
        index: index,
      },
    });
  };
};

const deleteHospitalExperience = (dispatch) => {
  return (hospitalExperience, index) => {
    dispatch({
      type: "delete_hospital_experience",
      payload: {
        hospitalExperience: hospitalExperience,
        index: index,
      }
    });
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
    editHospitalExperience,
    deleteHospitalExperience,
  },
  {
    hospitalExperiences: ["sjfhslhfsljdf", "jdfksjdfkjdsf", "kjadfksjdfkjdf"],
    specialAssignmentsServed: [],
    professionalPositions: [],
  }
);
