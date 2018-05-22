import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View, 
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import StatusTile from './Components/StatusTile';
import ModalConductor from './Components/ModalConductor';
import MainBlock from './Components/MainBlock';
import BlockConductor from './Components/BlockConductor';

import styles from './Styles';



export default class Sheet extends React.Component {

  render() {
    return <View style={styles.mainApp}>
        <StatusTile />
        <KeyboardAwareScrollView enableResetScrollToCoords={false} keyboardDismissMode={"on-drag"} showsVerticalScrollIndicator={false}>
          <MainBlock />
          <BlockConductor />
        </KeyboardAwareScrollView>
        <ModalConductor />
      </View>;
  }
}

