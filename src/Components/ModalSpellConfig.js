import React from "react";
import { Button, Slider, View, Text, StyleSheet } from "react-native";
import SegmentedControlTab from 'react-native-segmented-control-tab';

import styles, { LIGHT_GREY } from '../Styles';
import { slotsPerLevel } from '../Helpers/constants';
import * as modal from '../Actions/modals';
import ModalWrapper from "./ModalWrapper";
import Row from './Row';

class ModalSpellConfig extends React.Component {
  constructor(props) {
    super(props);
    let stats = this.props.stats;
    let key = this.props.stats.spellAttack.key;
    this.state = {
      stats: stats,
      abilities: {0: {id: 'int', title: 'Intelligence'}, 1: {id: 'wis', title: 'Wisdom'}, 2: {id: 'cha', title: 'Charisma'}},
      titles: ['Intelligence', 'Wisdom', 'Charisma'],
      selectedIndex: stats.spellAttack.selectedIndex,
      key: key,
      label: stats[key].title,
      modifier: stats[key].mod,
      profBonus: stats.prof.score,
      casterLevel: stats.spellAttack.casterLevel,
      maxSlots: slotsPerLevel[stats.spellAttack.casterLevel],
      attackBonus: Number(stats[key].mod) + Number(stats.prof.score)
    }
  }

  handleTabInput(index) {
    let stats = this.state.stats
    let key = this.state.abilities[index].id
    this.setState({
      key: key,
      selectedIndex: index,
      label: stats[key].title,
      modifier: stats[key].mod,
      attackBonus: Number(stats[key].mod) + Number(stats.prof.score)
    })
  }

  handleSliderInput(value) {
    this.setState({
      casterLevel: value,
      maxSlots: slotsPerLevel[value]
    })
  }

  render(props) {
    let { showModal, hideModal, restoreAllSlots, onSubmit } = this.props;
    let { key, selectedIndex, titles, label, modifier, profBonus, casterLevel, maxSlots, attackBonus } = this.state;
    return <ModalWrapper {...this.props} title={"Spell Attack"} onSubmit={() => onSubmit({ key: key, selectedIndex: selectedIndex, casterLevel: casterLevel, maxSlots: maxSlots }) }>
      <View style={{ width: '100%', alignSelf: 'center', alignContent: 'center'}}>
        <Row style={{ marginTop: 10 }}>
          <View style={{ marginLeft: -2 }}>
            <Text style={[styles.modalNoteCardLabel, { textAlign: 'center', width: 90 }]}>{label + ' Modifier'}</Text>
            <Text style={[styles.modalStatScore, { textAlign: 'center' }]}>{(modifier<0 ? '':'+') + modifier}</Text>
          </View>
          <Text style={[styles.secondaryScore, { alignSelf: 'center', marginTop: 15, padding: -5 }]}>{'+'}</Text>
          <View style={{ marginLeft: -2 }}>
            <Text style={[styles.modalNoteCardLabel, { width: 90, textAlign: 'center' }]}>{'Proficiency Bonus'}</Text>
            <Text style={[styles.modalStatScore, { textAlign: 'center' }]}>{'+'+profBonus}</Text>
          </View>
          <Text style={[styles.secondaryScore, { alignSelf: 'center', marginTop: 15, padding: -5 }]}>{'='}</Text>
          <View style={{ marginLeft: -2 }}>
            <Text style={[styles.modalNoteCardLabel, { textAlign: 'center', width: 90 }]}>{'Attack Bonus'}</Text>
            <Text style={[styles.modalStatScore, { textAlign: 'center' }]}>{(attackBonus<0 ? '':'+') + attackBonus}</Text>
          </View>
        </Row>
        <View style={{ width: '84%', marginTop: 5, marginBottom: 24, alignSelf: 'center'}}>
          <SegmentedControlTab 
            values={titles} 
            selectedIndex={selectedIndex}
            onTabPress={index => this.handleTabInput(index)}
            tabsContainerStyle={styles.tabsContainerStyle}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            tabTextStyle={styles.tabTextStyle}
            activeTabTextStyle={styles.activeTabTextStyle}  
          />
        </View>
        <View>
          <Button title={"Restore All Spell Slots"} onPress={() => {restoreAllSlots(), hideModal()}} />
        </View>
        <View style={{ alignSelf: 'center', alignItems: 'center', width: '60%', margin: 15 }}>
          <Text style={[styles.modalNoteCardLabel]}>{'Caster Level'}</Text>
          <Row>
            <Text style={[styles.modalLabel, { marginTop: 10 }]}>{casterLevel}</Text>
            <Slider style={{ width: 150}} value={casterLevel} onValueChange={value => this.handleSliderInput(value)} minimumValue={0} maximumValue={20} step={1} minimumTrackTintColor={LIGHT_GREY} maximumTrackTintColor={LIGHT_GREY} />
          </Row>
        </View>
        {/* <Button title={'Add New Spell'} onPress={() => showModal(modal.TEST)}/> */}
      </View>
    </ModalWrapper>
  }
};

const stylesss = StyleSheet.create({
  text: {
    color: "#f1f1f1"
  }
});

export default ModalSpellConfig;
