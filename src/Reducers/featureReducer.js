import initialState from './initialState';
import { ADD_FEATURE, DELETE_FEATURE, EDIT_FEATURE, UPDATE_FEATURE } from '../Actions/actions';
import shortid from 'shortid';

const featureReducer = (state = initialState.features, action) => {

  const { payload, type } = action;

  switch (type) {

    case ADD_FEATURE:
      const newID = shortid.generate();     
      return {
        ...state,
        [newID]: {
        id: newID,
        title: payload.title,
        description: payload.description,
        uses: payload.uses
        }
      }
    
    case DELETE_FEATURE:
      let newState = {...state};
      delete newState[payload.id];
      return newState;

    case EDIT_FEATURE:
      return {
        ...state,
        currentFeatureEditing: {
          id: "editing...",
          idCurrentlyEditing: payload.id,
          title: payload.title,
          description: payload.description,
          uses: payload.uses,
        }
      }

    case UPDATE_FEATURE: 
      let idToUpdate = payload.id;
      return {
        ...state,
        currentFeatureEditing: {
          id: "editing...",
          idCurrentlyEditing: ""          
        },
        [idToUpdate]: {
          ...state[idToUpdate],
          id: idToUpdate,
          title: payload.title,
          description: payload.description,
          uses: payload.uses,

        }
      }
    

    default:
      return state;
  }

}

export default featureReducer;