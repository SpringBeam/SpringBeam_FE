import { SELECT_TUTOR, SELECT_TUTEE } from "../actions/selectRole"

export const initialState = {
  role: true,
}

export const roleReducer = (state=initialState, action) => {
  switch(action.type){
    case SELECT_TUTOR:
      return{
        ...state,
        role : true
      }
    case SELECT_TUTEE:
      return {
        ...state,
        role : false
      }
  }
  return {
    ...state
  }
}