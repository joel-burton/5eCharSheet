import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import SegmentedControlTab from 'react-native-segmented-control-tab';

import styles from '../Styles';
import * as modal from '../Actions/modals';
import ModalWrapper from "./ModalWrapper";
import Row from './Row';

class ModalAttackConfig extends React.Component {
  constructor(props) {
    super(props);
    let stats = this.props.stats;
    let key = this.props.stats.meleeAttack.key;
    this.state = {
      stats: stats,
      abilities: {0: {id: 'str', title: 'Strength'}, 1: {id: 'dex', title: 'Dexterity'}},
      titles: ['Strength', 'Dexterity'],
      selectedIndex: stats.meleeAttack.selectedIndex,
      key: key,
      label: stats[key].title,
      modifier: stats[key].mod,
      profBonus: stats.prof.score,
      attackBonus: Number(stats[key].mod) + Number(stats.prof.score)
    }
  }

  setAttackStat(index) {
    let abilities = this.state.abilities;
    let key = abilities[index].id;
    let current = this.props.stats[key];

    this.setState({

    }, this.handleTabInput(index));
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

  render(props) {
    let { showModal, onSubmit } = this.props;
    let { key, selectedIndex, titles, label, modifier, profBonus, attackBonus } = this.state;
    return <ModalWrapper {...this.props} title={"Melee Attack"} onSubmit={() => onSubmit({ key: key, selectedIndex: selectedIndex }) }>
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
        <View style={{ width: '84%', marginBottom: 24, alignSelf: 'center'}}>
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
        <Button title={'Add Weapon'} onPress={() => showModal(modal.ADD_WEAPON)}/>
      </View>
    </ModalWrapper>
  }
};

const stylesss = StyleSheet.create({
  text: {
    color: "#f1f1f1"
  }
});

export default ModalAttackConfig;
