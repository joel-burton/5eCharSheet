import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from '../Styles';
import Drawer from './Drawer';
import { bonusCalc } from '../Helpers'


const StatCard = ({
   color, id, onLongPress=()=>{}, title, statScore, label1, label2, 
   score1, score2, skills=[], profObj, style, disablePress=false 
  }) => {

  return <View style={[styles.statCardContainer, { backgroundColor: color || "#646464" }, style]}>
    <Drawer onLongPress={onLongPress} disablePress={disablePress}>
      <View id={id}>
        <Text style={styles.statCardTitle}>{title}</Text>
        <View style={styles.statCardRow}>
          
          <View>
            <Text style={styles.statCardLabel}>{label2}</Text>
            <Text style={styles.statCardModText}>{score2 >= 0 ? "+"+score2 : score2}</Text>
          </View>
          <View>
            <Text style={styles.statCardScore}>{statScore}</Text>
          </View>
          <View>
            <Text style={styles.statCardLabel}>{label1}</Text>
            <Text style={styles.statCardModText}>{score1 >= 0 ? "+"+score1 : score1}</Text>
          </View>
          
        </View>
      </View>
      <View>
        { skills.map(skill => 
        <View style={styles.statCardProfRow} key={skill.id}>
          <Text style={styles.statCardProfLabel}>{skill.id}</Text>
          <Text style={styles.statCardProfScore}>
            {/*  The first expression figures out whether to display a + or -,
                 then the second expression displays the ability score  */}
            {(bonusCalc(skill, score2, profObj) >= 0 ? '+' : '') + (bonusCalc(skill, score2, profObj))}
          </Text>          
        </View>
                       
        )}
      </View>
    </Drawer>
  </View>
}


export default StatCard;
