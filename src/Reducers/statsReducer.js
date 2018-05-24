import initialState from "./initialState";
import { 
  EDIT_STAT, 
  UPDATE_ARMOR, 
  UPDATE_NAME,
  UPDATE_STAT, 
  UPDATE_SPEED, 
  UPDATE_HIT_DIE_COUNT, 
  UPDATE_HIT_DIE_MAX,
  UPDATE_MELEE_ATTACK,
  UPDATE_SPELL_ATTACK
} from "../Actions/actions";

const statsReducer = (state = initialState.stats, action) => {
  let payload = action.payload

  switch (action.type) {

    case EDIT_STAT:
      return {
        ...state,
        currentStatEditing: {
          ...state[action.id]
        }
      }
    case UPDATE_STAT:
      let { id, score, temp, max, save, mod, proficient, skills, jack, champ, alert, extraMod, extraModAbility, extraModScore, abilityInput } = payload;
      return {
        ...state,
        [id] :{
          ...state[id],
          score: score,
          temp: temp,
          max: max,
          save: save,
          mod: mod,
          proficient: proficient,
          skills: skills,
          jack: jack,
          champ: champ,
          alert: alert,
          extraMod: extraMod,
          extraModAbility: extraModAbility,
          extraModScore: extraModScore,
          abilityInput: abilityInput
        }
      }

    case UPDATE_NAME:
      console.log("||||  UPDATE_NAME  ||||");
      console.log(action);

      let newName = payload.name;
      if (newName == false) { newName = "Character Name" }
      return {
        ...state,
        name: newName
      }

    case UPDATE_HIT_DIE_COUNT:
      let { d6, d8, d10, d12 } = payload;
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          count: d6.count + d8.count + d10.count + d12.count,
          pool: {
            'd6': {...d6},
            'd8': {...d8},
            'd10': {...d10},
            'd12': {...d12}
          }
        }
      }

    case UPDATE_HIT_DIE_MAX:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          count: payload.d6.count + payload.d8.count + payload.d10.count + payload.d12.count,
          max: payload.d6.max + payload.d8.max + payload.d10.max + payload.d12.max,
          selectedIndex: payload.selectedIndex,
          pool: {
            d6: {...payload.d6},
            d8: {...payload.d8},
            d10: {...payload.d10},
            d12: {...payload.d12}
          }
        } 
      }

    case UPDATE_ARMOR:
      let { baseType, shield, itemBonus, miscBonus, baseScore, armorType, armorInput, naturalInput, naturalDex, shieldBonusScore, itemBonusScore, miscBonusScore } = payload;
      return {
        ...state,
        [payload.id] :{
        ...state[payload.id],
        score: payload.score,
        baseType: baseType,
        shield: shield,       
        itemBonus: itemBonus,
        miscBonus: miscBonus,
        baseScore: baseScore,
        armorType: armorType,
        armorInput: armorInput,
        naturalInput: naturalInput,
        naturalDex: naturalDex,
        shieldBonusScore: shieldBonusScore,
        itemBonusScore: itemBonusScore,
        miscBonusScore: miscBonusScore
        }
      }

    case UPDATE_SPEED:
      let { currentMode, modeInput, walk, swim, climb, fly } = payload;
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          currentMode: currentMode,
          modeInput: modeInput,
          mode: {
            'walk': walk,
            'swim': swim,
            'climb': climb,
            'fly': fly,
          }
        }
      }

    case UPDATE_MELEE_ATTACK:
      return {
        ...state, 
        meleeAttack: {
          key: payload.key,
          selectedIndex: payload.selectedIndex
        }
      }

    case UPDATE_SPELL_ATTACK:     
      return {
        ...state,
        spellAttack: {
          key: payload.key,
          selectedIndex: payload.selectedIndex,
          casterLevel: payload.casterLevel
        }
      }

    default:
      return state;
  }
};

export default statsReducer;
