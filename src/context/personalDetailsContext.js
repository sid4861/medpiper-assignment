import createDataContext from "./createDataContext";

const personalDetailsReducer = (state, action) => {
  switch (action.type) {
    case "input_first_name":
      return { ...state, firstName: action.payload };
    case "input_middle_name":
      return { ...state, middleName: action.payload };
    case "input_last_name":
      return { ...state, lastName: action.payload };
    case "input_dob":
      return { ...state, dateOfBirth: action.payload };
    case "input_gender":
      return { ...state, gender: action.payload };
    default:
      return state;
  }
};

const inputFirstName = (dispatch) => {
  return (firstName) => {
    dispatch({ type: "input_first_name", payload: firstName });
  };
};

const inputMiddleName = (dispatch) => {
  return (middleName) => {
    dispatch({ type: "input_middle_name", payload: middleName });
  };
};

const inputLastName = (dispatch) => {
  return (lastName) => {
    dispatch({ type: "input_last_name", payload: lastName });
  };
};

const inputDateOfBirth = (dispatch) => {
  return (dateOfBirth) => {
    dispatch({ type: "input_dob", payload: dateOfBirth });
  };
};

const inputGender = (dispatch) => {
  return (gender) => {
    dispatch({ type: "input_gender", payload: gender });
  };
};

export const { Context, Provider } = createDataContext(
  personalDetailsReducer,
  {
    inputFirstName,
    inputMiddleName,
    inputLastName,
    inputDateOfBirth,
    inputGender
  },
  { firstName: "", middleName: "", lastName: "", dateOfBirth: "", gender: "" }
);
