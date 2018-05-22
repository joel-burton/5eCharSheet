import React from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles';
import Drawer from './Drawer';
import SpellCard from './SpellCard';
import Separator from './Separator';


const SpellLevel = ({ title, onLongPress=()=>{}, uses, description, children, style={} }) => {

  return <View style={style}>
    <Drawer onLongPress={onLongPress}>
      <View id={title} style={[styles.row, styles.spellLevelCard]}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{uses}</Text>
      </View>
      <View>
        { description ? <View style={styles.spellLevelDescriptionCard}>
          <Separator />
          <Text style={[styles.description]}>{description}</Text>
        </View> : null }
        { children ? children : null }
      </View>
    </Drawer>
  </View>
}

export default SpellLevel;