import React from 'react';
import { View, StatusBar } from 'react-native';


import styles from '../Styles';

const StatusTile = () => {
  return <View style={styles.statusBar}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#000"} animated={true} />
    </View>;
}

export default StatusTile