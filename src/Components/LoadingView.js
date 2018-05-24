import React from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles';

const LoadingView = () => {

  return <View style={styles.loadingView}>
    <Text>Loading</Text>
  </View>
}

export default LoadingView;