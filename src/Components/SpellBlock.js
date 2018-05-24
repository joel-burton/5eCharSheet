import React from "react";
import { View } from "react-native";

import styles from "../Styles";
import * as modal from "../Actions/modals";
import SpellLevel from "./SpellLevel";
import SpellCard from "./SpellCard";
import { infinity, slotsPerLevel } from "../Helpers/constants";
import { drawSlots } from "../Helpers";

class SpellBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
        
  loadSpells = (spellLevel) => {
    let spells = this.props.spells.spellBook[spellLevel];
    let { editSpell, showModal } = this.props;
    return Object.values(spells).map( 
      spell => {
        return <SpellCard key={spell.id} id={spell.id} title={spell.title} onLongPress={()=>{editSpell(spell), showModal(modal.EDIT_SPELL)}}
          castingTime={spell.castingTime} components={spell.components} damage={spell.damage} 
          description={spell.description} duration={spell.duration} range={spell.range} 
          school={spell.school} spellLevel={spell.spellLevel} />
      }
    )
  }

  render(props) {
    let { editSpell, showModal } = this.props;
    let { currentSlots, maxSlots} = this.props.spells;
    let casterLevel = this.props.stats.spellAttack.casterLevel;
    
    return <View>
        <SpellLevel key={"cantrips"} title={"Cantrips"} onLongPress={() => showModal(modal.ADD_SPELL, { spellLevel: 'cantrips' })} uses={infinity} >
          { this.loadSpells("cantrips") }
        </SpellLevel>
        <SpellLevel key={"1st"} title={"1st Level"} onLongPress={() => showModal(modal.EDIT_SLOTS, { spellLevel: "1st" })} uses={drawSlots(currentSlots["1st"], maxSlots["1st"])} style={{ display: maxSlots["1st"] > 0 ? "flex" : "none" }}  >
          { this.loadSpells("1st") }
        </SpellLevel>
        <SpellLevel key={"2nd"} title={"2nd Level"} onLongPress={() => showModal(modal.EDIT_SLOTS, { spellLevel: "2nd" })} uses={drawSlots(currentSlots["2nd"], maxSlots["2nd"])} style={{ display: maxSlots["2nd"] > 0 ? "flex" : "none" }}  >
          { this.loadSpells("2nd") }
        </SpellLevel>
        <SpellLevel key={"3rd"} title={"3rd Level"} onLongPress={() => showModal(modal.EDIT_SLOTS, { spellLevel: "3rd" })} uses={drawSlots(currentSlots["3rd"], maxSlots["3rd"])} style={{ display: maxSlots["3rd"] > 0 ? "flex" : "none" }}  >
          { this.loadSpells("3rd") }
        </SpellLevel>
        <SpellLevel key={"4th"} title={"4th Level"} onLongPress={() => showModal(modal.EDIT_SLOTS, { spellLevel: "4th" })} uses={drawSlots(currentSlots["4th"], maxSlots["4th"])} style={{ display: maxSlots["4th"] > 0 ? "flex" : "none" }}  >
          { this.loadSpells("4th") }
        </SpellLevel>
        <SpellLevel key={"5th"} title={"5th Level"} onLongPress={() => showModal(modal.EDIT_SLOTS, { spellLevel: "5th" })} uses={drawSlots(currentSlots["5th"], maxSlots["5th"])} style={{ display: maxSlots["5th"] > 0 ? "flex" : "none" }}  >
          { this.loadSpells("5th") }
        </SpellLevel>
        <SpellLevel key={"6th"} title={"6th Level"} onLongPress={() => showModal(modal.EDIT_SLOTS, { spellLevel: "6th" })} uses={drawSlots(currentSlots["6th"], maxSlots["6th"])} style={{ display: maxSlots["6th"] > 0 ? "flex" : "none" }}  >
          { this.loadSpells("6th") }
        </SpellLevel>
        <SpellLevel key={"7th"} title={"7th Level"} onLongPress={() => showModal(modal.EDIT_SLOTS, { spellLevel: "7th" })} uses={drawSlots(currentSlots["7th"], maxSlots["7th"])} style={{ display: maxSlots["7th"] > 0 ? "flex" : "none" }}  >
          { this.loadSpells("7th") }
        </SpellLevel>
        <SpellLevel key={"8th"} title={"8th Level"} onLongPress={() => showModal(modal.EDIT_SLOTS, { spellLevel: "8th" })} uses={drawSlots(currentSlots["8th"], maxSlots["8th"])} style={{ display: maxSlots["8th"] > 0 ? "flex" : "none" }}  >
          { this.loadSpells("8th") }
        </SpellLevel>
        <SpellLevel key={"9th"} title={"9th Level"} onLongPress={() => showModal(modal.EDIT_SLOTS, { spellLevel: "9th" })} uses={drawSlots(currentSlots["9th"], maxSlots["9th"])} style={{ display: maxSlots["9th"] > 0 ? "flex" : "none" }}  >
          { this.loadSpells("9th") }
        </SpellLevel>
      </View>;
  }
} 

export default SpellBlock;

