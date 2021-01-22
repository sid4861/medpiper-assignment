import createDataContext from "./createDataContext";

const experiencesReducer = (state, action) => {
  switch (action.type) {
    case "add_hospital_experience":
      return {
        ...state,
        hospitalExperiences: [...state.hospitalExperiences, action.payload],
      };

    case "add_special_assignment_served":
      return {
        ...state,
        specialAssignmentsServed: [
          ...state.specialAssignmentsServed,
          action.payload,
        ],
      };

    case "add_professional_position":
      return {
        ...state,
        professionalPositions: [...state.professionalPositions, action.payload],
      };

    case "edit_hospital_experience":
      return {
        ...state,
        hospitalExperiences: Object.assign([], state.hospitalExperiences, {
          [action.payload.index]: action.payload.hospitalExperience,
        }),
      };
    case "edit_special_assignment_served":
      return {
        ...state,
        specialAssignmentsServed: Object.assign(
          [],
          state.specialAssignmentsServed,
          {
            [action.payload.index]: action.payload.specialAssignment,
          }
        ),
      };

    case "edit_professional_position":
      return {
        ...state,
        professionalPositions: Object.assign([], state.professionalPositions, {
          [action.payload.index]: action.payload.professionalPosition,
        }),
      };

    case "delete_special_assignment_served":
      return {
        ...state,
        specialAssignmentsServed: [
          ...state.specialAssignmentsServed.filter(
            (item) => item !== action.payload.specialAssignment
          ),
        ],
      };

    case "delete_hospital_experience":
      return {
        ...state,
        hospitalExperiences: [
          ...state.hospitalExperiences.filter(
            (item) => item !== action.payload.hospitalExperience
          ),
        ],
      };

    case "delete_professional_position":
      return {
        ...state,
        professionalPositions: [
          ...state.professionalPositions.filter(
            (item) => item !== action.payload.professionalPosition
          ),
        ],
      };

    default:
      return state;
  }
};

const addHospitalExperience = (dispatch) => {
  return (hospitalExperience) => {
    dispatch({ type: "add_hospital_experience", payload: hospitalExperience });
  };
};

const addSpecialAssignmentServed = (dispatch) => {
  return (specialAssignment) => {
    dispatch({
      type: "add_special_assignment_served",
      payload: specialAssignment,
    });
  };
};

const addProfessionalPositions = (dispatch) => {
  return (professionalPosition) => {
    dispatch({
      type: "add_professional_position",
      payload: professionalPosition,
    });
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

const editSpecialAssignmentServed = (dispatch) => {
  return (specialAssignment, index) => {
    //   console.log(hospitalExperience, index);
    dispatch({
      type: "edit_special_assignment_served",
      payload: {
        specialAssignment: specialAssignment,
        index: index,
      },
    });
  };
};

const editProfessionalPositions = (dispatch) => {
  return (professionalPosition, index) => {
    //   console.log(hospitalExperience, index);
    dispatch({
      type: "edit_professional_position",
      payload: {
        professionalPosition: professionalPosition,
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
      },
    });
  };
};

const deleteSpecialAssignmentServed = (dispatch) => {
  return (specialAssignment, index) => {
    dispatch({
      type: "delete_special_assignment_served",
      payload: {
        specialAssignment: specialAssignment,
        index: index,
      },
    });
  };
};

const deleteProfessionalPosition = (dispatch) => {
  return (professionalPosition, index) => {
    dispatch({
      type: "delete_professional_position",
      payload: {
        professionalPosition: professionalPosition,
        index: index,
      },
    });
  };
};

export const { Context, Provider } = createDataContext(
  experiencesReducer,
  {
    addHospitalExperience,
    addSpecialAssignmentServed,
    addProfessionalPositions,
    editHospitalExperience,
    editSpecialAssignmentServed,
    editProfessionalPositions,
    deleteHospitalExperience,
    deleteSpecialAssignmentServed,
    deleteProfessionalPosition,
  },
  {
    hospitalExperiences: ["sjfhslhfsljdf", "jdfksjdfkjdsf", "kjadfksjdfkjdf"],
    specialAssignmentsServed: [
      "sjfhslhfsljdf",
      "jdfksjdfkjdsf",
      "kjadfksjdfkjdf",
    ],
    professionalPositions: ["sjfhslhfsljdf", "jdfksjdfkjdsf", "kjadfksjdfkjdf"],
  }
);
