import initialState from "./initialState";
import { ADD_NOTE } from "../Actions/actions";

import { reduxLogger } from "./reduxLogger";

const notesReducer = (state = initialState.notes, action) => { 
  reduxLogger(state, action);
  let newState;

  switch (action.type) {
    case ADD_NOTE:
      const id = action.id;
      const text = action.text;
      newState = { [id]: text }
      return { ...state, ...newState }


    default:
      return state;
  }
};

export default notesReducer;
