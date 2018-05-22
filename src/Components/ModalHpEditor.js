import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

import ModalWrapper from "./ModalWrapper";
import Row from "./Row";

import styles, { BLUE, LIGHT_BLUE, RED, WHITE, BLACK, LIGHT_GREY } from "../Styles";


class ModalHpEditor extends React.Component {
  constructor(props) {
    super(props);
    let stat = this.props.stats.currentStatEditing;
    this.state = {
      stat: stat,
      modalTitle: stat.title ? stat.title : "Update Score",
      score: stat.score ? stat.score : 0,
      max: stat.max ? stat.max : '',
      temp: stat.temp ? stat.temp : 0,
      deltaInput: '',

    };
  }

  increaseScore = (delta) => {
    delta    = Number(delta);
    let newScore = Number(this.state.stat.score) + delta;
    let max      = Number(this.state.stat.max);
    let temp     = Number(this.state.stat.temp); 
    if (newScore > max) { newScore = max + temp }
    this.props.onSubmit({ id: this.state.stat.id, score: newScore, temp: temp, max: max });
    this.props.hideModal();
  };

  decreaseScore = (delta) => {
    delta = Number(delta);
    let newScore = Number(this.state.stat.score) - delta;
    let temp = Number(this.state.stat.temp) - delta;
    let max   = Number(this.state.stat.max);
    if (temp < 0) { temp = 0 }
    if (newScore < 0) { newScore = 0 }
    this.props.onSubmit({ id: this.state.stat.id, score: newScore, temp: temp, max: max });
    this.props.hideModal();
  };

  changeText = (stateSlice, text) => {
    this.setState({
      [stateSlice]: text
    });
  };

  render(props) {
    let {
      stat,
      score,
      temp,
      max,
      modalTitle,
      deltaInput,
    } = this.state;



    return (
      <ModalWrapper {...this.props} title={'Current Hit Points'}>
        <View>
          <Row style={{ justifyContent: "center" }}>
            <Text style={[styles.modalStatScore, { width: 'auto', color: (temp > 0) ? LIGHT_BLUE : WHITE }]}>
              {score}
            </Text>
            <Text style={[styles.modalStatScore, { width: 'auto', fontSize: 24, marginTop: 14 }]}>
              {max ? ('/'+max) : ''}
            </Text>
          </Row>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.noteCardLabel}>Change Hit Points</Text>
            <TextInput value={deltaInput} placeholder={'0'} autoFocus={true} placeholderTextColor={WHITE} style={[styles.noteCardInput, { width: 100, fontSize: 22, textAlign: 'center', }]} onChangeText={(text) => this.changeText('deltaInput', text)} maxLength={4} keyboardType={'numeric'} returnKeyType={'done'} keyboardAppearance={'dark'}/>
            <Row style={{ justifyContent: "center", width: "100%", justifyContent: 'space-around' }}>
              <TouchableOpacity  style={{alignItems: 'center', justifyContent: 'center', margin: 14, }} onPress={() => this.increaseScore(deltaInput)}>
                <Text style={{ fontSize: 20, color: BLUE, marginTop: -15, marginBottom: -20, padding: 5 }}> Heal </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={{alignItems: 'center', justifyContent: 'center', margin: 14, }} onPress={() => this.decreaseScore(deltaInput)}>
                <Text style={{ fontSize: 20, color: BLUE, marginTop: -15, marginBottom: -20, padding: 5 }}>Damage</Text>
              </TouchableOpacity>
            </Row>
          </View>
          

 
        </View>
      </ModalWrapper>
    );
  }
}

export default ModalHpEditor;
