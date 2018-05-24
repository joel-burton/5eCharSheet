import * as actions from './actions';

/*

The general naming scheme and what these actions do is as follows:

ADD: places a new piece of state in the store
DELETE: removes a piece of existing state from the store
EDIT: grabs a piece of existing state from store 
      and makes avalaiable to modal editors
UPDATE: takes data from modal editors and updates 
      an existing piece of state in the store

*/


// BLOCK ACTION CREATORS

export const toggleBlock = (ID) => {
  return {
    type: actions.TOGGLE_BLOCK,
    id: ID
  }
}


// FEATURES ACTION CREATORS

export const addFeature = (PAYLOAD) => {
  return {
    type: actions.ADD_FEATURE,
    payload: PAYLOAD
  }
}

export const deleteFeature = (PAYLOAD) => {
  return {
    type: actions.DELETE_FEATURE,
    payload: PAYLOAD
  }
}

export const editFeature = (PAYLOAD) => {
  return {
    type: actions.EDIT_FEATURE,
    payload: PAYLOAD
  }
}

export const updateFeature = (PAYLOAD) => {
  return {
    type: actions.UPDATE_FEATURE,
    payload: PAYLOAD
  }
}


// MODAL ACTION CREATORS

export const hideModal = () => {
  return {
    type: actions.HIDE_MODAL
  }
}

export const showModal = (MODAL, PAYLOAD) => {
  console.log("showModal action PAYLOAD:", PAYLOAD);
  return {
    type: actions.SHOW_MODAL,
    modal: MODAL,
    payload: PAYLOAD
  }
}


// NOTES ACTION ACTION CREATORS

export const addNote = (ID, TEXT) => {
  return {
    type: actions.ADD_NOTE,
    id: ID,
    text: TEXT
  }
}


// STATS ACTION CREATORS

export const updateName = (PAYLOAD) => {
  return {
    type: actions.UPDATE_NAME,
    payload: PAYLOAD
  }
}

export const editStat = (ID) => {
  return {
    type: actions.EDIT_STAT,
    id: ID
  }
}

export const updateArmor = (PAYLOAD) => {
  return {
    type: actions.UPDATE_ARMOR,
    payload: PAYLOAD
  }
}

export const updateStat = (PAYLOAD) => {
  return {
    type: actions.UPDATE_STAT,
    payload: PAYLOAD
  }
}

export const updateSpeed = (PAYLOAD) => {
  return {
    type: actions.UPDATE_SPEED,
    payload: PAYLOAD
  }
}

export const updateHitDieCount = (PAYLOAD) => {
  return {
    type: actions.UPDATE_HIT_DIE_COUNT,
    payload: PAYLOAD
  }
}

export const updateHitDieMax = (PAYLOAD) => {
  return {
    type: actions.UPDATE_HIT_DIE_MAX,
    payload: PAYLOAD
  }
}

export const updateMeleeAttack = (PAYLOAD) => {
  return {
    type: actions.UPDATE_MELEE_ATTACK,
    payload: PAYLOAD
  }
}

export const updateSpellAttack = (PAYLOAD) => {
  console.log("||||  updateSpellAttack  ||||");
  return {
    type: actions.UPDATE_SPELL_ATTACK,
    payload: PAYLOAD
  }
}

// SPELLS ACTION CREATORS

export const addSpell = (PAYLOAD) => {
  return {
    type: actions.ADD_SPELL,
    payload: PAYLOAD
  }
}

export const editSpell = (PAYLOAD) => {
  return {
    type: actions.EDIT_SPELL,
    payload: PAYLOAD
  }
}

export const deleteSpell = (PAYLOAD) => {
  return {
    type: actions.DELETE_SPELL,
    payload: PAYLOAD
  }
}

export const updateSpell = (PAYLOAD) => {
  return {
    type: actions.UPDATE_SPELL,
    payload: PAYLOAD
  }
}

export const restoreAllSlots = () => {
  console.log("||||  restoreAllSlots  ||||");
  return {
    type: actions.RESTORE_ALL_SLOTS
  }
}

export const updateMaxSlots = (PAYLOAD) => {
  console.log("||||  updateMaxSlots  ||||");
  return {
    type: actions.UPDATE_MAX_SLOTS,
    payload: PAYLOAD
  }
}

export const updateCurrentSlots = (PAYLOAD) => {
  console.log("||||  updateCurrentSlots  ||||");
  return {
    type: actions.UPDATE_CURRENT_SLOTS,
    payload: PAYLOAD
  }
}



// WEAPONS ACTION CREATORS

export const addWeapon = (PAYLOAD) => {
  return {
    type: actions.ADD_WEAPON,
    payload: PAYLOAD
  }
}

export const deleteWeapon = (PAYLOAD) => {
  return {
    type: actions.DELETE_WEAPON,
    payload: PAYLOAD
  }
}

export const editWeapon = (PAYLOAD) => {
  return {
    type: actions.EDIT_WEAPON,
    payload: PAYLOAD
  }
}

export const updateWeapon = (PAYLOAD) => {
  return {
    type: actions.UPDATE_WEAPON,
    payload: PAYLOAD
  }
}


// THUNKS 
export const updateSpellAttackAndSlots = (PAYLOAD) => {

  return (dispatch) => {
    dispatch(updateSpellAttack(PAYLOAD)),
    dispatch(updateMaxSlots(PAYLOAD))
  }

}
