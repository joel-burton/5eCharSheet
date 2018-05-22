import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ModalWrapper from './ModalWrapper';

const ModalTest = (props) => {
  console.log("ModalTest props:", props)
  return <ModalWrapper {...props} title={"Modal Test"}>
    <Text style={stylesss.text}>I'm Text from ModalTest!</Text>
  </ModalWrapper>
}

const stylesss = StyleSheet.create({

  text: {
    color: "#f1f1f1"
  }
});

export default ModalTest;