import React from 'react';
import { View } from 'react-native';

import styles, { LIGHT_GREY } from '../Styles';
import TitleCard from './TitleCard';

const NotesBlockCard = ({ toggleBlock, showModal, children }) => {
  return <View style={[styles.block]}>
        <TitleCard id={"NotesBlock"} onPress={ () => toggleBlock("NotesBlock") } 
          onLongPress={() => showModal("ADD_NEW")} title={"Character Info"} 
          color={LIGHT_GREY} style={styles.attackCard} />
          <View>{children}</View>
  </View>
};

export default NotesBlockCard;