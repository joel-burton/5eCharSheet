import initialState from './initialState';
import { TOGGLE_BLOCK } from '../Actions/actions';

const blockReducer = (state = initialState.blocks, action) => {
  
  switch (action.type) {
    case TOGGLE_BLOCK:

      if (state.currentBlock === action.id) {
        return {...state, currentBlock: null };
      } else {
        return {...state, currentBlock: action.id };
      }
      
    default:
      return state;
  }
};

export default blockReducer;