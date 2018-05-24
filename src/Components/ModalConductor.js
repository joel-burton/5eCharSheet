/* 
  Implemented following tutorial from:
  https://codeburst.io/modals-in-react-f6c3ff9f4701 
*/

import React from 'react';
import { connect } from 'react-redux';

import ModalTest from './ModalTest';
import ModalEditor from './ModalEditor';
import ModalHpMax from './ModalHpMax';
import ModalHpEditor from './ModalHpEditor';
import ModalHitDieEditor from './ModalHitDieEditor';
import ModalHitDieMax from './ModalHitDieMax';
import ModalStatEditor from './ModalStatEditor';
import ModalArmorEditor from './ModalArmorEditor';
import ModalSpeedEditor from './ModalSpeedEditor';
import ModalAttackConfig from './ModalAttackConfig';
import ModalSpellConfig from './ModalSpellConfig';
import ModalSpendSlot from './ModalSpendSlot';
import * as modal from '../Actions/modals';
import { 
  hideModal, showModal, updateName, editStat,
  addFeature, deleteFeature, updateFeature,
  updateArmor, updateStat, updateSpeed,
  updateMeleeAttack, updateSpellAttack,
  addSpell, deleteSpell, updateSpell,
  restoreAllSlots, updateCurrentSlots,
  updateSpellAttackAndSlots, 
  updateHitDieCount, updateHitDieMax,
  addWeapon, deleteWeapon, updateWeapon,
 } from '../Actions';




const ModalConductor = (props) => {
  switch (props.modals.currentModal) {

    case modal.TEST: 
      return <ModalTest {...props}/>;

    case modal.MAIN_MENU:
      return <ModalTest {...props} title={"Main Menu"}/>;

    case modal.ADD_FEATURE: 
      return <ModalEditor {...props} modalTitle={'Add Feature...'} showTitle={true} titleInputLabel={'Feature Title'} showDescription={true} showUses={true} onSubmit={props.addFeature} />;

    case modal.EDIT_FEATURE:
      const { currentFeatureEditing } = props.features;
      return <ModalEditor {...props} modalTitle={'Edit Feature...'} onSubmit={props.updateFeature} deleteOnPress={props.deleteFeature}   
        showTitle={true} showDescription={true} showUses={true} showDelete={true} deleteLabel={"Remove Feature?"}
        id={currentFeatureEditing.idCurrentlyEditing} titleInputLabel={'Feature Title'} titleInput={currentFeatureEditing.title}
        descriptionInput={currentFeatureEditing.description} usesInput={currentFeatureEditing.uses} />

    case modal.ADD_WEAPON:
      return <ModalEditor {...props} modalTitle={'Add Weapon...'} showTitle={true} titleInputLabel={'Weapon Title'} showDamage={true} showDamageType={true} showRange={true} showProperties={true} showDescription={true}  onSubmit={props.addWeapon}/>;

    case modal.EDIT_WEAPON:
      const { currentWeaponEditing } = props.weapons;
      return <ModalEditor {...props} modalTitle={'Edit Weapon...'} onSubmit={props.updateWeapon} deleteOnPress={props.deleteWeapon}
        showTitle={true} showDamage={true} showDamageType={true} showProperties={true} showRange={true} showDescription={true} showDelete={true} deleteLabel={"Remove Weapon?"}
        id={currentWeaponEditing.idCurrentlyEditing} titleInputLabel={'Weapon Title'} titleInput={currentWeaponEditing.title}
        damageInput={currentWeaponEditing.damage} damageTypeInput={currentWeaponEditing.damageType} propertiesInput={currentWeaponEditing.properties}
        rangeInput={currentWeaponEditing.range} descriptionInput={currentWeaponEditing.description} />  

    case modal.EDIT_NAME:
      return <ModalEditor {...props} modalTitle={'Character Name...'} showCharName={true} charNameInput={props.stats.name} onSubmit={props.updateName} />

    case modal.EDIT_STAT:
      return <ModalStatEditor {...props} onSubmit={props.updateStat} type={'stat'} />

    case modal.EDIT_PROF:
      return <ModalStatEditor {...props} onSubmit={props.updateStat} type={'prof'} />

    case modal.EDIT_INIT:
      return <ModalStatEditor {...props} onSubmit={props.updateStat} type={'init'}/>

    case modal.EDIT_ARMOR:
      return <ModalArmorEditor {...props} onSubmit={props.updateArmor} />

    case modal.EDIT_SPEED:
      return <ModalSpeedEditor {...props} onSubmit={props.updateSpeed} />

    case modal.EDIT_HP_SCORE: 
      return <ModalHpEditor {...props} onSubmit={props.updateStat} showOk={false} />

    case modal.EDIT_HP_MAX:
      return <ModalHpMax {...props} onSubmit={props.updateStat} />

    case modal.EDIT_HIT_DIE_COUNT:
      return <ModalHitDieEditor {...props} onSubmit={props.updateHitDieCount} title={'Spend Hit Dice'} />

    case modal.EDIT_HIT_DIE_MAX:
      return <ModalHitDieMax {...props} onSubmit={props.updateHitDieMax} title={'Max Hit Dice'}/>

    case modal.ATTACK_CONFIG:
      return <ModalAttackConfig {...props} onSubmit={props.updateMeleeAttack}/>

    case modal.SPELL_CONFIG:
      return <ModalSpellConfig {...props} onSubmit={props.updateSpellAttackAndSlots}/>

    case modal.ADD_SPELL:
      return <ModalEditor {...props} onSubmit={props.addSpell} modalTitle={'Add Spell...'} 
        showTitle={true} titleInputLabel={'Spell Title'} showCastingTime={true} 
        rangeInputLabel={'Spell Range'} rangeInputPlaceholder={'self, touch, 30ft...'} 
        showProperties={true} propertiesInputLabel={'Components'} 
        propertiesInputPlaceholder={'V, S, M, a piece of cured leather...'} showDuration={true}  
        showDescription={true} showMagicSchool={true} showRange={true} showDamage={true} />

    case modal.EDIT_SPELL:
      let { currentSpellEditing } = props.spells;
      return <ModalEditor {...props} onSubmit={props.updateSpell} modalTitle={'Edit Spell...'} showTitle={true} titleInputLabel={'Spell Title'} titleInput={currentSpellEditing.title} id={currentSpellEditing.id} spellLevel={currentSpellEditing.spellLevel} showCastingTime={true} castingTimeInput={currentSpellEditing.castingTime} rangeInputLabel={'Spell Range'} rangeInput={currentSpellEditing.range} rangeInputPlaceholder={'self, touch, 30ft...'} showProperties={true} propertiesInputLabel={'Components'} propertiesInput={currentSpellEditing.components} propertiesInputPlaceholder={'V, S, M a piece of cured leather...'} showDuration={true} durationInput={currentSpellEditing.duration} descriptionInput={currentSpellEditing.description} showDescription={true} showMagicSchool={true} magicSchoolInput={currentSpellEditing.school} showRange={true} showDamage={true} damageInput={currentSpellEditing.damage} showDelete={true} deleteOnPress={props.deleteSpell} deleteLabel={'Remove Spell?'} />

    case modal.EDIT_SLOTS:
      return <ModalSpendSlot {...props} onSubmit={props.updateCurrentSlots} />

    default:
      return null;
  }
}

const mapStateToProps = (state) => {
  return { ...state,
    modals: state.modals,
    features: state.features, 
    stats: state.stats,
    spells: state.spells,
    weapons: state.weapons,  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal:      () => dispatch(hideModal()),
    showModal: (modal, payload={}) => dispatch(showModal(modal, payload)),

    addFeature:    (payload) => dispatch(addFeature(payload)),
    deleteFeature: (payload) => dispatch(deleteFeature(payload)),
    updateFeature: (payload) => dispatch(updateFeature(payload)),

    editStat: (id) => dispatch(editStat(id)),

    updateName:       (name) => dispatch(updateName(name)),
    updateStat:  (payload) => dispatch(updateStat(payload)),
    updateArmor: (payload) => dispatch(updateArmor(payload)),
    updateSpeed: (payload) => dispatch(updateSpeed(payload)),
    updateMeleeAttack: (payload) => dispatch(updateMeleeAttack(payload)),
    updateSpellAttack: (payload) => dispatch(updateSpellAttack(payload)),
    updateHitDieCount: (payload) => dispatch(updateHitDieCount(payload)),
    updateHitDieMax:   (payload) => dispatch(updateHitDieMax(payload)),

    addSpell:    (payload) => dispatch(addSpell(payload)),
    deleteSpell: (payload) => dispatch(deleteSpell(payload)),
    updateSpell: (payload) => dispatch(updateSpell(payload)),
    restoreAllSlots:    () => dispatch(restoreAllSlots()),
    updateCurrentSlots: (payload) => dispatch(updateCurrentSlots(payload)),

    addWeapon:    (payload) => dispatch(addWeapon(payload)),
    deleteWeapon: (payload) => dispatch(deleteWeapon(payload)),
    updateWeapon: (payload) => dispatch(updateWeapon(payload)),

    // Thunks
    updateSpellAttackAndSlots: (payload) => dispatch(updateSpellAttackAndSlots(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);