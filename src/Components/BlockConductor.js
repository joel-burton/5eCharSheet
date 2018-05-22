import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { editStat, editFeature, editSpell, editWeapon, restoreAllSlots, showModal, toggleBlock } from '../Actions';

import styles, { LIGHT_GREY, GREY, DARK_GREY } from "../Styles";
import AttackCard from './AttackCard';
import TitleCard from './TitleCard';
import WeaponBlockCard from './WeaponBlockCard';
import WeaponBlock from './WeaponBlock';
import SpellBlockCard from './SpellBlockCard';
import SpellBlock from './SpellBlock';
import FeatureBlockCard from './FeatureBlockCard';
import FeatureBlock from './FeatureBlock';
import InventoryBlockCard from './InventoryBlockCard';
import InventoryBlock from './InventoryBlock';
import NotesBlockCard from './NotesBlockCard';
import NotesBlock from './NotesBlock';



const BlockConductor = (props) => {

  // console.log("BlockConductor props:");
  // console.log(props);

  if (!props.blocks) {
    return <View style={styles.blockContainer}>
        <WeaponBlockCard  {...props}/>
        <SpellBlockCard  {...props}/>
        <FeatureBlockCard  {...props}/>
        <InventoryBlockCard  {...props}/>
        <NotesBlockCard  {...props}/>
        <View style={styles.fillerFooter}/>
      </View>;
  } else {

    switch (props.blocks.currentBlock) {

      case 'WeaponBlock':
        return <View style={styles.blockContainer}>
          <WeaponBlockCard  {...props}>
            <WeaponBlock  {...props}/> 
          </WeaponBlockCard>
          <SpellBlockCard  {...props}/>
          <FeatureBlockCard  {...props}/>
          <InventoryBlockCard  {...props}/>
          <NotesBlockCard  {...props}/>
          <View style={styles.fillerFooter}/>
        </View>;

      case 'SpellBlock':
        return <View style={styles.blockContainer}>
          <WeaponBlockCard  {...props}/>
          <SpellBlockCard  {...props}>
            <SpellBlock  {...props}/> 
          </SpellBlockCard>
          <FeatureBlockCard  {...props}/>
          <InventoryBlockCard  {...props}/>
          <NotesBlockCard  {...props}/>
          <View style={styles.fillerFooter}/>
        </View>;

      case 'FeatureBlock':
        return <View style={styles.blockContainer}>
          <WeaponBlockCard  {...props}/>
          <SpellBlockCard  {...props}/>
          <FeatureBlockCard  {...props}>
            <FeatureBlock  {...props}/> 
          </FeatureBlockCard>
          <InventoryBlockCard  {...props}/>
          <NotesBlockCard  {...props}/>
          <View style={styles.fillerFooter}/>
        </View>;

      case 'InventoryBlock':
        return <View style={styles.blockContainer}>
          <WeaponBlockCard  {...props}/>
          <SpellBlockCard  {...props}/>
          <FeatureBlockCard  {...props}/>
          <InventoryBlockCard  {...props}>
            <InventoryBlock {...props} pp={props.notes.pp} gp={props.notes.gp} ep={props.notes.ep} sp={props.notes.sp} cp={props.notes.cp} 
              armor={props.notes.armor} consumable={props.notes.consumable} equipment={props.notes.equipment} />  
          </InventoryBlockCard>
          <NotesBlockCard  {...props}/>
          <View style={styles.fillerFooter}/>
        </View>;

      case 'NotesBlock':
        return <View style={styles.blockContainer}>
          <WeaponBlockCard  {...props}/>
          <SpellBlockCard  {...props}/>
          <FeatureBlockCard  {...props}/>
          <InventoryBlockCard  {...props}/>
          <NotesBlockCard  {...props}>
            <NotesBlock {...props} race={props.notes.race} xp={props.notes.xp} classlvl={props.notes.classlvl} 
              alignment={props.notes.alignment} background={props.notes.background} 
              weaponProfs={props.notes.weaponProfs} armorProfs={props.notes.armorProfs} 
              toolProfs={props.notes.toolProfs} languages={props.notes.languages} 
              personality={props.notes.personality} ideals={props.notes.ideals} bonds={props.notes.bonds} 
              flaws={props.notes.flaws} notes={props.notes.notes} />
          </NotesBlockCard>
          <View style={styles.fillerFooter}/>
        </View>;
        
      default: 
        return <View style={styles.blockContainer}>
          <WeaponBlockCard  {...props}/>
          <SpellBlockCard  {...props}/>
          <FeatureBlockCard  {...props}/>
          <InventoryBlockCard  {...props}/>
          <NotesBlockCard  {...props}/>
          <View style={styles.fillerFooter}/>
        </View>;
    }
  }  
}


const mapStateToProps = (state) => {
  return { 
    ...state,
    blocks: state.blocks,
    features: state.features,
    notes: state.notes,
    stats: state.stats,
    spells: state.spells,
    weapons: state.weapons 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editStat: (id) => dispatch(editStat(id)),
    editFeature: (payload) => dispatch(editFeature(payload)),
    editSpell: (payload) => dispatch(editSpell(payload)),
    editWeapon: (payload) => dispatch(editWeapon(payload)),
    restoreAllSlots: () => dispatch(restoreAllSlots()),
    showModal: (modal, payload={}) => dispatch(showModal(modal, payload)),
    toggleBlock: id => dispatch(toggleBlock(id)),   
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockConductor);