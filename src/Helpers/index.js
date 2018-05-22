import { filled, empty } from './constants';

/*
  modScore calulates modifiers and save scores from the base stat score.
  ex: a score of 20 will return a modScore of 5,
  and a score of 7 will return a modScore of -2                       */
export const modScore = (score) => {
  return Math.floor((score - 10)/2);
}


/* 
  bonusCalc will calculate skill bonus scores taking into account
  taking into account the proficiency bonus, jack of all trades from bards, and 
  remarkable athlete from champion fighters
 
  The IF block logic goes like this: 
  IF proficient apply bonus
  ELSE IF champion:
    IF str, dex, or con ability, apply half bonus (rounded up)
    ELSE check for jack of all trades and apply half bonus (rounded down) if true,
  ELSE IF jack of all trades apply half bonus (rounded down)
  ELSE return no bonus to modScore
  */
export const bonusCalc = (skill, mod, prof) => {

  if (skill.proficient) { return mod + prof.score }
  else if (prof.champ) { 
    if (skill.id in {'init':'', 'Athletics':'', 'Acrobatics':'', 'Sleight of Hand':'', 'Stealth':''}) {
      return mod + Math.ceil(prof.score/2)
    } else { 
      if (prof.jack) { return mod + Math.floor(prof.score/2) } 
      else { return mod }
      }
  } else if (prof.jack) { return mod + Math.floor(prof.score/2) }
  else { return mod }
}

export const initCalc = (stats) => {
  let total = bonusCalc(stats['init'], stats['dex'].mod, stats['prof']);
  let init = stats['init'];
  if (init.alert) total += 5;
  if (init.extraMod) total += init.extraModScore;
  return total;
}

export const fillPool = hitDie => {
  let pool = [];
  let sizes = hitDie.sizes;
  sizes.forEach(size => {
    if (hitDie.pool[size]) {
      let die = hitDie.pool[size];
      if (die.max > 0) pool.push(die.id);
    }
    
  })
  return pool;
}


/*
  drawSlots uses current and max spell slots from 
  state to build a string of symbols representing 
  filled or empty slots. 
*/
export const drawSlots = (current, max) => {
  let { slots, spent } = "";
  if (max > 0) {
    if (current > max) {
      current = max;
    }
    slots = filled.repeat(Number(current));
    spent = empty.repeat(Number(max) - Number(current));
  }
  return spent + slots;
}