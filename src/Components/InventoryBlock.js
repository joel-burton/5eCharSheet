import React from "react";
import { View } from "react-native";

import Row from "./Row";
import NoteCard from "./NoteCard";
import styles from "../Styles";


const InventoryBlock = (
  { pp, gp, ep, sp, cp, armor, consumable, equipment } ) => {

  return <View style={styles.notesDrawer}>
    <Row>
      <NoteCard id={"pp"} label={"PP"} placeholder={"0"} text={pp} keyboardType={"numeric"} />
      <NoteCard id={"gp"} label={"GP"} placeholder={"0"} text={gp} keyboardType={"numeric"} />
      <NoteCard id={"ep"} label={"EP"} placeholder={"0"} text={ep} keyboardType={"numeric"} />
      <NoteCard id={"sp"} label={"SP"} placeholder={"0"} text={sp} keyboardType={"numeric"} />
      <NoteCard id={"cp"} label={"CP"} placeholder={"0"} text={cp} keyboardType={"numeric"} />
    </Row>
    <Row>
      <NoteCard id={"consumable"} label={"Potions, Scrolls, Consumables"} placeholder={"none"} text={consumable} grow={true} />
    </Row>
    <Row>
      <NoteCard id={"armor"} label={"Armor & Weapons"} placeholder={"none"} text={armor} grow={true} />
    </Row>

    <Row>
      <NoteCard id={"equipment"} label={"Items & Equipment"} placeholder={"none"} text={equipment} grow={true} />
    </Row>
  </View>;

}

export default InventoryBlock;