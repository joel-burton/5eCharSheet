import React from 'react';
import { View } from 'react-native';

import * as modal from '../Actions/modals';
import styles from '../Styles';
import AttackCard from './AttackCard';


const WeaponBlockCard = ({ toggleBlock, showModal, children, stats }) => {
  
  let stat = stats[stats.meleeAttack.key];
  let prof = stats.prof.score;

  return <View style={styles.block}>
    <AttackCard id={"WeaponBlock"} onPress={() => toggleBlock("WeaponBlock")}
      onLongPress={() => showModal(modal.ATTACK_CONFIG, 'melee')} title={"Melee Attack"} 
      statScore={"+" + (Number(stat.mod) + Number(prof))} label1={stat.title} score1={(stat.mod<0 ? "":"+") + stat.mod} 
      label2={"Proficiency"} score2={"+"+prof} color={stat.color} />
      <View>{ children }</View>
  </View>
   
}

export default WeaponBlockCard;