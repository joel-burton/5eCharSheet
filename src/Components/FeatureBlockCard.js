import React from 'react';
import { View } from 'react-native';

import styles, { DARK_GREY } from '../Styles';
import * as modal from '../Actions/modals';
import TitleCard from './TitleCard';

const FeatureBlockCard = ({ toggleBlock, showModal, children }) => {
  return <View style={[styles.block]}>
    <TitleCard id={"FeatureBlock"} onPress={ () => toggleBlock("FeatureBlock")}
      onLongPress={() => showModal(modal.ADD_FEATURE)} title={"Features & Abilities"} 
      color={DARK_GREY} style={styles.attackCard} />
      <View>{children}</View>
  </View>
};

export default FeatureBlockCard;