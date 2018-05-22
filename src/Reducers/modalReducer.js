import initialState from "./initialState";
import { HIDE_MODAL, SHOW_MODAL, } from "../Actions/actions";

const modalReducer = (state = initialState.modals, action) => {

  switch (action.type) {
    case HIDE_MODAL:
      return { ...state, currentModal: null, payload: null }
    case SHOW_MODAL:
      return {...state, currentModal: action.modal, payload: action.payload }
    default:
      return state;
  }
};

export default modalReducer;
