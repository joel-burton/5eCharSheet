import React from 'react';
import { View } from 'react-native';

import styles from '../Styles';


const Row = ({ children, style }) => {
  return <View style={[styles.row, style]}>{children}</View>;
};


export default Row;