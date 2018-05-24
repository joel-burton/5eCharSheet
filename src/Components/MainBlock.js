import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'; 

import { editStat, showModal } from '../Actions';
import * as modal from '../Actions/modals';
import Row from "./Row";
import Column from "./Column";
import Card from "./Card";
import StatCard from "./StatCard";
import { bonusCalc, initCalc } from '../Helpers'
import styles, { RED } from "../Styles";


const MainBlock = (props) => {
  const { stats, showModal, editStat } = props;
  let str = stats['str'];
  let int = stats['int'];
  let cha = stats['cha'];
  let dex = stats['dex'];
  let wis = stats['wis'];
  let con = stats['con'];
  let hp  = stats['hp'];
  let ac  = stats['ac'];
  let init = stats['init'];
  let prof = stats['prof'];
  let speed = stats['speed'].currentMode;
  let hitDie = stats['hitDie'];

  return <View id={"mainBlock"} style={[styles.container, styles.mainBlock]}>
      <TouchableOpacity onPress={()=> showModal(modal.EDIT_NAME)} onLongPress={()=> showModal(modal.MAIN_MENU)}>
        <Text style={styles.characterName}>{stats.name}</Text>
      </TouchableOpacity>

      <Row style={{flex: 0, width: "71%", marginTop: 10, alignItems: "flex-end" }}>
        <Card label={init.title} onLongPress={()=> {editStat(init.id), showModal(modal.EDIT_INIT)}} score={(initCalc(stats) >=0 ? '+': '')+initCalc(stats)} />
        <Card label={hp.title} onPress={ ()=> {editStat(hp.id), showModal(modal.EDIT_HP_SCORE)} } onLongPress={ ()=> {editStat(hp.id), showModal(modal.EDIT_HP_MAX)} } score={hp.score} cardStyles={{ card: styles.hpCard, score: (hp.temp > 0) ? styles.hpCardTemp : null }} />
        <Card label={speed.title} onLongPress={ ()=> {editStat(stats['speed'].id), showModal(modal.EDIT_SPEED)} } score={speed.score} cardStyles={{ score: styles.speedScore }} />
      </Row>

      <Row style={{flex: 0, width: "71%", margin: 12 }}>
        <Card label={prof.title} onLongPress={()=> {editStat(prof.id), showModal(modal.EDIT_PROF)}} score={(prof.score >=0 ? '+': '')+prof.score} cardStyles={{ label: styles.proficiencyCardLabel }} />
        <Card label={ac.shortTitle} onLongPress={ ()=> {editStat(ac.id), showModal(modal.EDIT_ARMOR)} } score={ac.score} cardStyles={{ card: styles.armorCard, label: styles.armorLabel, score: styles.armorScore }} />
        <Card label={hitDie.title} onPress={ ()=> {editStat(hitDie.id), showModal(modal.EDIT_HIT_DIE_COUNT)}} onLongPress={ ()=> {editStat(hitDie.id), showModal(modal.EDIT_HIT_DIE_MAX)} } score={hitDie.count+'/'+hitDie.max} cardStyles={{ score: styles.hitDieScore }} />
      </Row>

      <Row style={{ width: "96%" }}>
        <View style={styles.column}>
          <StatCard id ={"strCard"} onLongPress={()=> {editStat(str.id), showModal(modal.EDIT_STAT)}} title={str.title} statScore={str.score} label1={"Save"} score1={str.save} label2={"Mod"} score2={str.mod} saveProficient={str.proficient} profObj={prof} color={str.color} skills={str.skills} />
          <StatCard id ={"intCard"} onLongPress={()=> {editStat(int.id), showModal(modal.EDIT_STAT)}} title={int.title} statScore={int.score} label1={"Save"} score1={int.save} label2={"Mod"} score2={int.mod} saveProficient={int.proficient} profObj={prof} color={int.color} skills={int.skills} />
          <StatCard id ={"chaCard"} onLongPress={()=> {editStat(cha.id), showModal(modal.EDIT_STAT)}} title={cha.title} statScore={cha.score} label1={"Save"} score1={cha.save} label2={"Mod"} score2={cha.mod} saveProficient={cha.proficient} profObj={prof} color={cha.color} skills={cha.skills} />
        </View>

        <View style={styles.column}>
          <StatCard id ={"dexCard"} onLongPress={()=> {editStat(dex.id), showModal(modal.EDIT_STAT)}} title={dex.title} statScore={dex.score} label1={"Save"} score1={dex.save} label2={"Mod"} score2={dex.mod} saveProficient={dex.proficient} profObj={prof} color={dex.color} skills={dex.skills} />
          <StatCard id ={"wisCard"} onLongPress={()=> {editStat(wis.id), showModal(modal.EDIT_STAT)}} title={wis.title} statScore={wis.score} label1={"Save"} score1={wis.save} label2={"Mod"} score2={wis.mod} saveProficient={wis.proficient} profObj={prof} color={wis.color} skills={wis.skills} />
          <StatCard id ={"conCard"} onLongPress={()=> {editStat(con.id), showModal(modal.EDIT_STAT)}} title={con.title} statScore={con.score} label1={"Save"} score1={con.save} label2={"Mod"} score2={con.mod} saveProficient={con.proficient} profObj={prof} color={con.color} skills={con.skills} />
        </View>
      </Row>
    </View>
  
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats
  }
} 

const mapDispatchToProps = (dispatch) => {
  return { 
    showModal: (modal, payload={}) => dispatch(showModal(modal, payload)),
    editStat: id => dispatch(editStat(id)) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBlock);