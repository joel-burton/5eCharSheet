import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { addNote } from "../Actions";
import styles from '../Styles';


class NoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    }
  }

  changeText =(text) => {
    this.setState({
      text: text
    })   
  };

  render(props) {
    const { id, text, addNote, label, keyboardType, maxLength, placeholder, grow, textAlign } = this.props;

    return <View id={id} style={styles.noteCard}>
        <Text style={styles.noteCardLabel}>{label}</Text>
        <TextInput style={[styles.noteCardInput, { textAlign: textAlign ? textAlign : "center" }]} 
          onChangeText={text => this.changeText(text)} onBlur={() => addNote(id, this.state.text)} 
          placeholderTextColor={"#444"} keyboardType={keyboardType} maxLength={maxLength} 
          placeholder={placeholder} returnKeyType={grow ? "default" : "done"} autoGrow={grow} multiline={grow} 
          value={this.state.text}  autoCapitalize={"none"} keyboardAppearance={"dark"}/>
      </View>;
  } 
 
};

const mapStateToProps = (state, props) => {
    return { ...props, /*notes: state.notes*/ }
}

const mapDispatchToProps = (dispatch) => {
    return { addNote: (id, text) => dispatch(addNote(id, text)) }
} 

export default connect(mapStateToProps, mapDispatchToProps)(NoteCard);