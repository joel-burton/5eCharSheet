import React from 'react';
import { Button, Text, TextInput, StyleSheet, View } from 'react-native';

import ModalWrapper from './ModalWrapper';
import styles, { RED, DARK_GREY } from '../Styles';

class ModalEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id ? this.props.id : "",
      // charNameInput checks to see if a name exists, then if the name is the default "Characater Name" it clears the input
      charNameInput: this.props.charNameInput ? (this.props.charNameInput==="Character Name" ? "" : this.props.charNameInput) : "",
      titleInput: this.props.titleInput ? this.props.titleInput : "",
      magicSchoolInput: this.props.magicSchoolInput ? this.props.magicSchoolInput : "",
      damageInput: this.props.damageInput ? this.props.damageInput : "",
      damageTypeInput: this.props.damageTypeInput ? this.props.damageTypeInput : "",
      castingTimeInput: this.props.castingTimeInput ? this.props.castingTimeInput : "",
      rangeInput: this.props.rangeInput ? this.props.rangeInput : "",
      durationInput: this.props.durationInput ? this.props.durationInput : "",
      propertiesInput: this.props.propertiesInput ? this.props.propertiesInput : "",
      descriptionInput: this.props.descriptionInput ? this.props.descriptionInput : "",
      usesInput: this.props.usesInput ? this.props.usesInput : "",
      spellLevel: this.props.spellLevel ? this.props.spellLevel : "I don't exist"
    };
  }

  changeText = (stateSlice, text) => {
    this.setState({
      [stateSlice]: text,      
    });
  };

  render(props) {
    const {
      modalTitle,
      onSubmit,
      showDelete,
      deleteLabel,
      deleteOnPress, 
      showCharName,   
      charNameInput, 
      showTitle,
      titleInputLabel,
      titleInput,
      showMagicSchool,
      magicSchoolInputLabel,
      magicSchoolInput,
      showDamage,
      damageInputLabel,
      damageInput,
      showDamageType,
      damageTypeInputLabel,
      damageTypeInput,
      showCastingTime,
      castingTimeInputLabel,
      castingTimeInput,
      showRange,
      rangeInputLabel,
      rangeInput,
      rangeInputPlaceholder,
      showDuration,
      durationInputLabel,
      durationInput,
      showProperties,
      propertiesInputLabel,
      propertiesInput,
      propertiesInputPlaceholder,
      showDescription,
      descriptionInputLabel,
      descriptionInput,
      showUses,
      usesInputLabel,
      usesInput,
    } = this.props;
  
    // console.log("current props from Editor Props:");
    // console.log(this.props);
    const onDelete = (payload) => {
      this.props.deleteOnPress(payload);
      this.props.hideModal();
    }

    return <ModalWrapper {...this.props} title={modalTitle} 
      onSubmit={() => onSubmit({id: this.props.id, name: this.state.charNameInput, title: this.state.titleInput, school: this.state.magicSchoolInput, damage: this.state.damageInput, damageType: this.state.damageTypeInput, castingTime: this.state.castingTimeInput, properties: this.state.propertiesInput, range: this.state.rangeInput, duration: this.state.durationInput, description: this.state.descriptionInput, uses: this.state.usesInput, spellLevel: this.state.spellLevel })}>
        
        {/* Delete Button */}
        <View style={[{ display : showDelete ? "flex" : "none" }]}>
          <Button onPress={() => onDelete({id: this.state.id, spellLevel: this.state.spellLevel})} title={deleteLabel} color={RED} />
        </View>

        {/* Name Input */}
        <View style={[{ alignSelf: "center", width: "100%", display: showCharName ? "flex" : "none" }]}>
          <TextInput id={"charNameInputBox"} style={[styles.noteCardInput, { textAlign: 'center' }]} onChangeText={text => this.changeText("charNameInput", text)} placeholderTextColor={"#797979"} maxLength={50} placeholder={"What shall we call you?"} autoFocus={true} autoGrow={false} value={this.state.charNameInput} autoCapitalize={"words"} keyboardAppearance={"dark"} />
        </View>

        {/* Title Input */}
        <View id={"titleInput"} style={[{ display: showTitle ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{titleInputLabel}</Text>
          <TextInput id={"titleInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("titleInput", text)} placeholderTextColor={"#797979"} maxLength={35} placeholder={"Enter a title..."} autoGrow={false} value={this.state.titleInput} autoCapitalize={"words"} keyboardAppearance={"dark"} />
        </View>

        {/* Magic School Input */}
        <View id={"magicSchoolInput"} style={[{ display: showMagicSchool ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{magicSchoolInputLabel}</Text>
          <TextInput id={"magicSchoolInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("magicSchoolInput", text)} placeholderTextColor={"#797979"} maxLength={35} placeholder={"Abjuration, Divination, Evocation..."} autoGrow={false} value={this.state.magicSchoolInput} autoCapitalize={"words"} keyboardAppearance={"dark"} />
        </View>

        {/* Damage Input - e.g. '2d6' */}
        <View id={"damageInput"} style={[{ display: showDamage ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{damageInputLabel}</Text>
          <TextInput id={"damageInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("damageInput", text)} placeholderTextColor={"#797979"} maxLength={35} placeholder={"e.g. 1d6+1"} autoGrow={false} value={this.state.damageInput} autoCapitalize={"none"} keyboardAppearance={"dark"} />
        </View>

        {/* Damage Type Input */}
        <View id={"damageTypeInput"} style={[{ display: showDamageType ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{damageTypeInputLabel}</Text>
          <TextInput id={"damageTypeInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("damageTypeInput", text)} placeholderTextColor={"#797979"} maxLength={35} placeholder={"slashing, piercing, etc..."} autoGrow={false} value={this.state.damageTypeInput} autoCapitalize={"none"} keyboardAppearance={"dark"} />
        </View>

        {/* Casting Time Input */}
        <View id={"castingTimeInput"} style={[{ display: showCastingTime ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{castingTimeInputLabel}</Text>
          <TextInput id={"castingTimeInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("castingTimeInput", text)} placeholderTextColor={"#797979"} maxLength={35} placeholder={"1 action, 10 minutes..."} autoGrow={false} value={this.state.castingTimeInput} autoCapitalize={"none"} keyboardAppearance={"dark"} />
        </View>

        {/* Range Input */}
        <View id={"rangeInput"} style={[{ display: showRange ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{rangeInputLabel}</Text>
          <TextInput id={"rangeInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("rangeInput", text)} placeholderTextColor={"#797979"} maxLength={35} placeholder={rangeInputPlaceholder} autoGrow={false} value={this.state.rangeInput} autoCapitalize={"words"} keyboardAppearance={"dark"} />
        </View>

        {/* Properties Input - used for Components on spell editing */}
        <View id={"propertiesInput"} style={[{ display: showProperties ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{propertiesInputLabel}</Text>
          <TextInput id={"propertiesInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("propertiesInput", text)} placeholderTextColor={"#797979"} maxLength={35} placeholder={propertiesInputPlaceholder} autoGrow={false} value={this.state.propertiesInput} autoCapitalize={"none"} keyboardAppearance={"dark"} />
        </View>

        {/* Duration Input */}
        <View id={"durationInput"} style={[{ display: showDuration ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{durationInputLabel}</Text>
          <TextInput id={"durationInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("durationInput", text)} placeholderTextColor={"#797979"} maxLength={35} placeholder={"Concentration, 10 minutes..."} autoGrow={false} value={this.state.durationInput} autoCapitalize={"words"} keyboardAppearance={"dark"} />
        </View>

        {/* Description Input */}
        <View id={"descriptionInput"} style={[{ display: showDescription ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{descriptionInputLabel}</Text>
          <TextInput id={"descriptionInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("descriptionInput", text)} placeholderTextColor={"#797979"} placeholder={"Enter description..."} multiline={true} autoGrow={true} value={this.state.descriptionInput} autoCapitalize={"sentences"} keyboardAppearance={"dark"} />
        </View>

        {/* Uses Input */}
        <View id={"usesInput"} style={[{ display: showUses ? "flex" : "none" }]}>
          <Text style={[styles.modalNoteCardLabel]}>{usesInputLabel}</Text>
          <TextInput id={"usesInputBox"} style={styles.noteCardInput} onChangeText={text => this.changeText("usesInput", text)} placeholderTextColor={"#797979"} maxLength={14} placeholder={"e.g. 1/day"} autoGrow={false} value={this.state.usesInput} autoCapitalize={"none"} keyboardAppearance={"dark"} />
        </View>
      </ModalWrapper>;
  }
};



ModalEditor.defaultProps = {
  modalTitle: "Edit...", 
  onSubmit: () => {},
  deleteOnPress: () => {},
  deleteLabel: "Delete",
  titleInputLabel: "Title",
  magicSchoolInputLabel: 'Magical School',
  damageInputLabel: "Damage Roll",
  damageTypeInputLabel: "Damage Type",
  castingTimeInputLabel: "Casting Time",
  rangeInputLabel: "Weapon Range",
  rangeInputPlaceholder: "melee, 5ft, 100/300",
  durationInputLabel: "Spell Duration",
  propertiesInputLabel: "Properties",
  propertiesInputPlaceholder: "2h, heavy, etc...",
  descriptionInputLabel: "Description",
  usesInputLabel: "Uses",
  showCharName: false,
  showDelete: false,
  showTitle: false,
  showMagicSchool: false,
  showDamage: false,
  showDamageType: false,
  showCastingTime: false,
  showRange: false,
  showDuration: false,
  showProperties: false,
  showDescription: false,
  showUses: false,
}

export default ModalEditor;