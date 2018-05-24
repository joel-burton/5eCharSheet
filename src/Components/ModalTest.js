import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ModalWrapper from './ModalWrapper';

const ModalTest = (props) => {
  console.log("ModalTest props:", props)
  return <ModalWrapper {...props} title={props.title ? props.title : "Modal Test"}>
    <Text style={stylesss.text}>I'm the Placeholder Modal.</Text>
  </ModalWrapper>
}

const stylesss = StyleSheet.create({

  text: {
    color: "#f1f1f1"
  }
});

export default ModalTest;