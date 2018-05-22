import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from '../Styles';
import * as actions from '../Actions';

class TitleCard extends React.Component {

    drawerStyle = (drawerOpen, id) => {
    if (drawerOpen === id) {
      return { }  
    } else {
      return { display: 'none'}
    }
  };

  render() {
    const { id, onPress = () => {}, onLongPress = () => {}, drawerOpen, title, color, children } = this.props;


    return <View id={id} style={styles.container}>
        <View style={[styles.attackCard, { backgroundColor: color || "#646464" }]}>
          <TouchableOpacity onPress={onPress} onLongPress={onLongPress} activeOpacity={0.5}>
            <Text
              style={[
                styles.scoreDefault,
                { fontSize: 30, paddingTop: 13 }
              ]}
            >
              {title}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={this.drawerStyle(drawerOpen, id)}>{children}</View>
      </View>;
  }
     
};



export default TitleCard;