import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../Styles';
import Drawer from './Drawer';
import Separator from './Separator';


const WeaponCard = ({ title, onLongPress=()=>{}, damage, damageType, range, weaponProperties, description }) => {
  return <View>
    <Drawer onLongPress={onLongPress}>
      <View id={title} style={[styles.row, styles.weaponCard]}>
        <Text style={[styles.text, { alignSelf: 'center'}]}>{title}</Text>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.weaponLabel}>{damageType}</Text>
          <Text style={styles.weaponText}>{damage}</Text>
        </View>
      </View>
      <View style={[styles.weaponCardDrawer, { display: weaponProperties || range || description ? 'flex' : 'none' }]}>
        <View style={{ paddingBottom: 3 }}>
          <Separator />
        </View>
        <View style={[styles.row, {display: weaponProperties ? 'flex' : 'none'}]}>
          <Text style={styles.weaponLabel}>Properties</Text>
          <Text style={styles.weaponTextSmall}>{weaponProperties}</Text>
        </View>
        <View style={[styles.row, { display: range ? 'flex' : 'none'}]}>
          <Text style={styles.weaponLabel}>Range</Text>
          <Text style={styles.weaponTextSmall}>{range}</Text>
        </View>
        <Text style={[styles.description, { display: description ? 'flex' : 'none'}]}>{description}</Text>
      </View>
    </Drawer>
  </View>
}

export default WeaponCard;