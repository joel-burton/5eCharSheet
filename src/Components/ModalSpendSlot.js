import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";

import { drawSlots } from '../Helpers';
import styles, { LIGHT_GREY, WHITE } from '../Styles';
import * as modal from '../Actions/modals';
import ModalWrapper from "./ModalWrapper";
import Row from './Row';

class ModalSpendSlot extends React.Component {
  constructor(props) {
    super(props);
    let spells = this.props.spells;
    let spellLevel = this.props.modals.payload.spellLevel;
    this.state = {
      spellLevel: spellLevel,
      currentSlots: spells.currentSlots[spellLevel],
      maxSlots: spells.maxSlots[spellLevel]
    }
  }

  spend = () => {
    let currentSlots = this.state.currentSlots;
    if (currentSlots > 0) {
      currentSlots -= 1;
    }
    this.setState({ 
      ...this.state, 
      currentSlots: currentSlots 
    })
  }

  restore = () => {
    let currentSlots = this.state.currentSlots;
    let maxSlots = this.state.maxSlots;
    if (currentSlots < maxSlots) {
      currentSlots += 1;
    }
    this.setState({ 
      ...this.state, 
      currentSlots: currentSlots 
    });
  }


  render(props) {
    console.log("|||  ModalSpendSlot props  |||", this.props);
    let { showModal, onSubmit } = this.props;
    let { spellLevel, currentSlots, maxSlots } = this.state;
    return <ModalWrapper {...this.props} title={"Update Spell Slots"} onSubmit={() => onSubmit({ spellLevel: spellLevel, currentSlots: currentSlots, maxSlots: maxSlots }) }>
      <View style={{ margin: 25, width: '100%', alignSelf: 'center', alignContent: 'center'}}>
        <Text style={[styles.modalNoteCardLabel, { fontSize: 20, alignSelf: 'center', margin: 5 }]}>{spellLevel + " Level"}</Text>
        <Text style={[styles.modalLabel, { alignSelf: 'center', margin: 5 }]}>{drawSlots(currentSlots, maxSlots)}</Text>
        <Row style={{ margin: 40, marginBottom: 25, width: '100%', alignSelf: 'center', justifyContent: 'center' }}>
          <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={() => this.restore()}>
            <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>{'+'}</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={() => this.spend()}>
            <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>{'-'}</Text>
          </TouchableOpacity>
        </Row>

        <Button title={'Add '+ spellLevel +' Level Spell'} onPress={() => showModal(modal.ADD_SPELL)}/>
      </View>
    </ModalWrapper>
  }
}


export default ModalSpendSlot;
