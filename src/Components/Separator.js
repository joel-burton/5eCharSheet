import React from 'react';
import { View } from 'react-native';

const Separator = (style, color) => {
  return <View  style={[{ width: "96%", alignSelf: "center", borderBottomWidth: 1, borderColor: "rgba(0, 0, 0, 0.09)", borderStyle: "solid" }, ...style]}/>
}

export default Separator;