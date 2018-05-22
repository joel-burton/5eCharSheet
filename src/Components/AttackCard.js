import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from '../Styles';

const AttackCard = ({
      id,
      onPress=()=>{},
      onLongPress=()=>{},
      title,
      statScore,
      label1,
      label2,
      score1,
      score2,
      color,
    }) => {

    return <View id={id} style={[styles.attackCard, { backgroundColor: color || "#646464" }]}>
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress} activeOpacity={0.5}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.statRow}>
          <View style={styles.statBlock}>
            <Text style={styles.attackCardLabel}>{label1}</Text>
            <Text style={styles.secondaryScore}>{score1}</Text>
          </View>
          <View>
            <Text style={styles.statScore}>{statScore}</Text>
          </View>
          <View style={styles.statBlock}>
            <Text style={styles.attackCardLabel}>{label2}</Text>
            <Text style={styles.secondaryScore}>{score2}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View> 


};


export default AttackCard;
