import initialState from './initialState';
import { ADD_WEAPON, DELETE_WEAPON, EDIT_WEAPON, UPDATE_WEAPON } from '../Actions/actions';
import shortid from 'shortid';

const weaponReducer = (state = initialState.weapons, action) => {

  const { payload, type } = action;

  switch (type) {

    case ADD_WEAPON:
      const newID = shortid.generate();     
      return {
        ...state,
        [newID]: {
        id: newID,
        title: payload.title,
        damage: payload.damage,
        damageType: payload.damageType,
        properties: payload.properties,
        range: payload.range,
        description: payload.description
        }
      }
    
    case DELETE_WEAPON:
      let newState = {...state};
      delete newState[payload.id];
      return newState;

    case EDIT_WEAPON:
      return {
        ...state,
        currentWeaponEditing: {
          id: "editing...",
          idCurrentlyEditing: payload.id,
          title: payload.title,
          damage: payload.damage,
          damageType: payload.damageType,
          properties: payload.properties,
          range: payload.range,
          description: payload.description
        }
      }

    case UPDATE_WEAPON: 
      let idToUpdate = payload.id;
      return {
        ...state,
        currentWeaponEditing: {
          id: "editing...",
          idCurrentlyEditing: ""          
        },
        [idToUpdate]: {
          ...state[idToUpdate],
          id: idToUpdate,
          title: payload.title,
          damage: payload.damage,
          damageType: payload.damageType,
          properties: payload.properties,
          range: payload.range,
          description: payload.description
        }
      }
    

    default:
      return state;
  }

}

export default weaponReducer;