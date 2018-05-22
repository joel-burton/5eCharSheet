import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import styles from '../Styles';
import Drawer from './Drawer';
import Separator from './Separator';
import Row from './Row';


const SpellCard = ({ id, title, onLongPress=()=>{}, castingTime='', components='', damage='', description='', duration='', range='', school='', spellLevel='' }) => {
  return <View key={id} style={{ alignSelf: 'center' }}>
    <Drawer onLongPress={onLongPress}>
    <View id={id} style={styles.spellCard}>
      <View style={styles.row}>
        <Text style={styles.spellTitle}>{title}</Text>
        <Text style={styles.weaponLabel}>{school}</Text>
      </View>
    </View>   
    <View style={styles.spellDrawer}>
      <View style={{ paddingBottom: 3 }} >
        <Separator />
      </View>
      <View style={[styles.row, { display: damage ? 'flex' : 'none' }]}>
        <Text style={styles.weaponLabel}>Damage</Text>
        <Text style={styles.weaponTextSmall}>{damage}</Text>
      </View>
      <View style={[styles.row, { display: castingTime ? 'flex' : 'none' }]}>
        <Text style={styles.weaponLabel}>Casting Time</Text>
        <Text style={styles.weaponTextSmall}>{castingTime}</Text>
      </View>
      <View style={[styles.row, { display: range ? 'flex' : 'none' }]}>
        <Text style={styles.weaponLabel}>Range</Text>
        <Text style={styles.weaponTextSmall}>{range}</Text>
      </View>
      <View style={[styles.row, { display: components ? 'flex' : 'none' }]}>
        <Text style={styles.weaponLabel}>Components</Text>
        <Text style={[styles.weaponTextSmall, { width: '66%', textAlign: 'right' }]}>{components}</Text>
      </View>
      <View style={[styles.row, { display: duration ? 'flex' : 'none' }]}>
        <Text style={styles.weaponLabel}>Duration</Text>
        <Text style={styles.weaponTextSmall}>{duration}</Text>
      </View>
      <Text style={styles.description}>{description}</Text> 
    </View>
    </Drawer>
  </View>
};


export default SpellCard;
