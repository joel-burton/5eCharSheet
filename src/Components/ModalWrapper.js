import React from 'react';
import { Button, Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BlurView } from 'expo';

import { BLUE, DARK_GREY, GREY, LIGHT_GREY, RED, SHADOW, WHITE } from '../Styles';


const ModalWrapper = (props) => {

  const onSubmit = () => {
    props.onSubmit();
    props.hideModal();
  } 

  const onCancel = () => {
    // also needs to clear the modal's state
    props.hideModal();
  }

  const okButton = (
    <TouchableOpacity onPress={onSubmit} style={[styles.modalWrapperButton, ]} activeOpacity={0.2}>
      <Text style={styles.modalWrapperButtonOkText}>{props.okText}</Text>
    </TouchableOpacity>
  );

  const cancelButton = (
    <TouchableOpacity onPress={onCancel} style={[styles.modalWrapperButton, ]} activeOpacity={0.2}>
      <Text style={styles.modalWrapperButtonCancelText}>Cancel</Text>
    </TouchableOpacity>
  );


  return <Modal transparent={true} animationType={'fade'}>
    
    <BlurView intensity={25} tint={'dark'} style={styles.modalOverlay}>
    <BlurView intensity={100} tint={'dark'} style={styles.modalOverlay}>
    <View style={{backgroundColor: "#000", height: 20, width: "100%", position: "absolute", zIndex: 15}} />
    <KeyboardAwareScrollView contentContainerStyle={styles.modalScrollView} extraScrollHeight={60} keyboardOpeningTime={0} enableResetScrollToCoords={true} keyboardDismissMode={"on-drag"} showsVerticalScrollIndicator={false}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalWrapperHeader}>
          <Text style={styles.modalWrapperTitle}>{props.title}</Text>
        </View>
        <View style={styles.modalWrapperBody}>
          { props.children }
        </View>
        <View style={styles.modalWrapperFooter} >
          { cancelButton }
          { props.showOk ? okButton : null }
        </View>
      </View>
    </KeyboardAwareScrollView>
    </BlurView>
    </BlurView>
  </Modal>
}

const styles = StyleSheet.create({
  modalOverlay: {
    width: "100%",
    height: "100%"
  },
  modalScrollView: {
    paddingTop: 45,
    paddingBottom: 45,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    minHeight: "100%",
    zIndex: 10
  },
  modalWrapper: {
    backgroundColor: "rgba(130,130,130, 0.35)", // Dark Grey
    height: "auto",
    width: "88%",
    // alignSelf: 'center',
    // margin: 'auto',
    borderRadius: 14
  },
  modalWrapperBody: {
    padding: 8,
    // backgroundColor: "rgba(128,128,128, 0.0)",borderTopWidth: 1,
    // borderTopColor: "rgba(128,128,128, 0.35)" // Light Grey
  },
  modalWrapperButton: {
    flex: 1,
    height: 55,
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    // borderTopWidth: 1,
    // borderTopColor: "rgba(180,180,180, 0.35)"
  },
  modalWrapperButtonCancelText: {
    color: RED,
    fontSize: 22
  },
  modalWrapperButtonOkText: {
    color: BLUE,
    fontSize: 22
  },
  modalWrapperFooter: {
    flexDirection: "row",
    width: "100%",

  },
  modalWrapperHeader: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  modalWrapperTitle: {
    fontSize: 32,
    color: WHITE,
    marginTop: 10,
    marginBottom: -5
  }
});



ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'Done',
  okDisabled: false,
  onSubmit: () => {}
};

export default ModalWrapper;