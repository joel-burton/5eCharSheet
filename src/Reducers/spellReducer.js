import initialState from './initialState';
import {
  ADD_SPELL,
  DELETE_SPELL,
  EDIT_SPELL,
  UPDATE_SPELL,
  RESTORE_ALL_SLOTS,
  UPDATE_MAX_SLOTS,
  UPDATE_CURRENT_SLOTS
} from '../Actions/actions';
import shortid from 'shortid'

const spellReducer = ( state = initialState.spells, action ) => {
  let payload = action.payload;
  // let spellLevel='', currentSlots='', maxSlots='' = action.payload

  switch (action.type) {

    
    case ADD_SPELL:
      const newID = shortid.generate();
      console.log('ADD_SPELL action:', action.payload)
      return {
        ...state,
        spellBook: {
          ...state.spellBook,
          [payload.spellLevel]: {
            ...state.spellBook[payload.spellLevel],
            [newID]: {
              id: newID,
              spellLevel: payload.spellLevel,
              title: payload.title,
              school: payload.school,
              damage: payload.damage,
              castingTime: payload.castingTime,
              range: payload.range,
              components: payload.properties,
              duration: payload.duration,
              description: payload.description
            }

          }
        }

        
      }

    case DELETE_SPELL: 
      let newSpellBook = {...state.spellBook};
      delete newSpellBook[payload.spellLevel][payload.id];
      let newState = {
        ...state,
        spellBook: {
          ...newSpellBook
        }
      } 
      return newState;


    case EDIT_SPELL:
      // console.log("EDIT_SPELL action.payload:", payload);
      return {
        ...state,
        currentSpellEditing: {
          ...payload
        }
      }


    case UPDATE_SPELL:
      console.log("||||  UPDATE_SPELL payload  ||||");
      console.log(payload);
      return {
        ...state,
        currentSpellEditing: {},
        spellBook: {
          ...state.spellBook,
          [payload.spellLevel]: {
            ...state.spellBook[payload.spellLevel],
            [payload.id]: {
              id: payload.id,
              spellLevel: payload.spellLevel,
              title: payload.title,
              school: payload.school,
              damage: payload.damage,
              castingTime: payload.castingTime,
              range: payload.range,
              components: payload.properties,
              duration: payload.duration,
              description: payload.description
            }  
          }
        }
      }


    case UPDATE_MAX_SLOTS:
      return {
        ...state,
        maxSlots: payload.maxSlots
      }

    case UPDATE_CURRENT_SLOTS:
      let { spellLevel, currentSlots } = payload;
      return {
        ...state,
        currentSlots: {
          ...state.currentSlots,
          [spellLevel]: currentSlots           
        }
      }

    case RESTORE_ALL_SLOTS:
      return {
        ...state,
        currentSlots: {
          ...state.maxSlots
        }
      }

    default:
      return state; 
  }

}


export default spellReducer;