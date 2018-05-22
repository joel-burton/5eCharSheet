import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';

import styles, { WHITE, GREY, SHADOW, } from '../Styles';


const Card = ({ score, label, cardStyles={}, onPress=()=>{}, onLongPress=()=>{} }) => {
  return <View style={[styles.cardDefault, cardStyles.card]}>
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress} activeOpacity={0.5}>
        <Text style={[styles.labelDefault, cardStyles.label]}>{label}</Text>
        <Text style={[styles.scoreDefault, cardStyles.score]}>{score}</Text>
      </TouchableOpacity>     
    </View>;
}

/*

Card component can be given a cardStyles property.
cardStyles has 3  customizable attributes. 

* card is the background of the card itself. 
* label is the smaller text at the top.
* score is the primary number displayed.

the styles can follow the format of defaultStyle below:

const defaultStyle = StyleSheet.create({
  card: {
    backgroundColor: GREY,
    height: 71,
    width: 80,
    borderRadius: 10,
  },
  label: {
    marginTop: 6,
    fontSize: 18,
    textAlign: "center",
    color: WHITE
  },
  score: {
    fontSize: 36,
    letterSpacing: -0.5,
    textAlign: "center",
    color: WHITE,
    textShadowColor: SHADOW,
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 6
  }
});
*/

export default Card;