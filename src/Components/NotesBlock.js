import React from "react";
import { View } from "react-native";

import styles from '../Styles';
import Row from './Row';
import NoteCard from './NoteCard';


const NotesBlock = ({
  race, xp, classlvl, alignment, background, 
  weaponProfs, armorProfs, toolProfs, languages, 
  personality, ideals, bonds, flaws, notes
}) => {

    return <View style={[styles.notesDrawer]}>
        <Row>
          <NoteCard id={"race"} label={"Race"} placeholder={"Human"} text={race} />
          <NoteCard id={"xp"} label={"Experience"} placeholder={"0"} text={xp} keyboardType={"numeric"} />
        </Row>

        <Row>
          <NoteCard id={"classlvl"} label={"Class & Level"} placeholder={"Fighter 1"} text={classlvl} grow={true} />
        </Row>

        <Row>
          <NoteCard id={"alignment"} label={"Alignment"} placeholder={"Neutral"} text={alignment} />
          <NoteCard id={"background"} label={"Background"} placeholder={"Hermit"} text={background} />
        </Row>

        <Row>
          <NoteCard id={"weaponProfs"} label={"Weapon Proficiencies"} placeholder={"none"} text={weaponProfs} grow={true} />
        </Row>

        <Row>
          <NoteCard id={"armorProfs"} label={"Armor Proficiencies"} placeholder={"none"} text={armorProfs} grow={true} />
        </Row>

        <Row>
          <NoteCard id={"toolProfs"} label={"Tool Proficiencies"} placeholder={"none"} text={toolProfs} grow={true} />
        </Row>

        <Row>
          <NoteCard id={"languages"} label={"Languages"} placeholder={"none"} text={languages} grow={true} />
        </Row>

        <Row>
          <NoteCard id={"personality"} label={"Personality Traits"} placeholder={"none"} text={personality} grow={true} />
        </Row>

        <Row>
          <NoteCard id={"ideals"} label={"Ideals"} placeholder={"none"} text={ideals} grow={true} />
        </Row>

        <Row>
          <NoteCard id={"bonds"} label={"Bonds"} placeholder={"none"} text={bonds} grow={true} />
        </Row>

        <Row>
          <NoteCard id={"flaws"} label={"Flaws"} placeholder={"none"} text={flaws} grow={true} />
        </Row>

        <Row>
          <NoteCard id={"notes"} label={"Notes"} placeholder={"none"} text={notes} grow={true} />
        </Row>
      </View>;
}


export default NotesBlock;
