import React from 'react';
import { View } from 'react-native';

import styles, { GREY } from '../Styles';
import TitleCard from './TitleCard';

const InventoryBlockCard = ({ toggleBlock, showModal, children }) => {
  return <View style={[styles.block,]}>
    <TitleCard id={"InventoryBlock"} onPress={ () => toggleBlock("InventoryBlock") } 
    onLongPress={() => showModal("ADD_NEW")} title={"Inventory"} 
    color={GREY} style={styles.attackCard} />
    <View>{children}</View>
  </View>    
};

export default InventoryBlockCard;