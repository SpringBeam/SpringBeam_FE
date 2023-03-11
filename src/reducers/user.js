import { SET_USERID } from "../actions/selectUser";

export const initialState = {
  userId: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERID":
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

