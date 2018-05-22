import React from 'react';
import { View } from 'react-native';

import styles from '../Styles';
import * as modal from '../Actions/modals';
import AttackCard from './AttackCard';

const SpellBlockCard = ({ toggleBlock, showModal, children, stats }) => {
  let stat = stats[stats.spellAttack.key];
  let prof = stats.prof.score;

  return <View style={[styles.block,]}>
    <AttackCard id={"SpellBlock"} onPress={ () => toggleBlock("SpellBlock") } 
      onLongPress={() => showModal(modal.SPELL_CONFIG)} title={"Spell Attack"} 
      statScore={"+" + (Number(stat.mod) + Number(prof))} label1={"Caster Level"} score1={stats.spellAttack.casterLevel} 
      label2={"Spell DC"} score2={8 + Number(prof) + Number(stat.mod)} color={stat.color} />
      <View>{children}</View>
  </View>
};

export default SpellBlockCard;