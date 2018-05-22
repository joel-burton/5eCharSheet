import React from 'react';
import { Text, View } from 'react-native';

import * as modal from '../Actions/modals';
import WeaponCard from './WeaponCard';
import styles from '../Styles';


const WeaponBlock = (props) => {
  // console.log("||||| WeaponBlock props: |||||");
  // console.log(props);
  return <View>
    {
      Object.values(props.weapons).map( weapon => {
        if (weapon.id !== "editing...") {
          return <WeaponCard key={weapon.id} title={weapon.title} damage={weapon.damage} damageType={weapon.damageType} 
            weaponProperties={weapon.properties} range={weapon.range} description={weapon.description} 
            onLongPress={() => {props.editWeapon({id: weapon.id, title: weapon.title, damage: weapon.damage, damageType: weapon.damageType, properties: weapon.properties, range: weapon.range, description: weapon.description}), props.showModal(modal.EDIT_WEAPON)}} />
        }          
      })
    }
  </View>
}

export default WeaponBlock;
