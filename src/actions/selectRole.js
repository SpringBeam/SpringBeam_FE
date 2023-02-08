export const SELECT_TUTOR = 'SELECT_TUTOR';
export const SELECT_TUTEE = 'SELECT_TUTEE';

export const selectTutor = ()=>{
  return {
    type:SELECT_TUTOR,
  }
}

export const selectTutee = ()=>{
  return {
    type:SELECT_TUTEE,
  }
}