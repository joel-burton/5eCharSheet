import { combineReducers } from 'redux';
import blockReducer from './blockReducer';
import featureReducer from './featureReducer';
import modalReducer from './modalReducer';
import notesReducer from './notesReducer';
import statsReducer from './statsReducer';
import spellReducer from './spellReducer';
import weaponReducer from './weaponReducer';



const rootReducer = combineReducers({
// piece of state: reducer that manages that piece of state
  blocks: blockReducer,
  features: featureReducer,
  modals: modalReducer,
  notes: notesReducer,
  stats: statsReducer,
  spells: spellReducer,
  weapons: weaponReducer  
});

export default rootReducer;
