import React from "react";
import {
  TouchableOpacity,
  Slider,
  Switch,
  View,
  Text,
  SegmentedControlIOS
} from "react-native";
import SegmentedControlTab from 'react-native-segmented-control-tab';

import ModalWrapper from "./ModalWrapper";
import StatCard from "./StatCard";
import Row from "./Row";

import styles, { WHITE, BLACK, LIGHT_GREY } from "../Styles";

class ModalSpeedEditor extends React.Component {
  constructor(props) {
    super(props);
    let speed = this.props.stats.currentStatEditing;
    let current = speed.currentMode;
    console.log("speed to set state:", speed);
    this.state = { 
      modalTitle: "Speed", 
      modes: { 0:'walk', 1:'swim', 2:'climb', 3:'fly' },
      modeInput: speed.modeInput ? speed.modeInput : 0,
      mode: current ? current : speed.mode['walk'],
      walk: speed.mode['walk'] ? speed.mode['walk'] : {id: 'walk', title: 'Speed', score: 30},
      swim: speed.mode['swim'] ? speed.mode['swim'] : {id: 'swim', title: 'Swim', score: 15},
      climb: speed.mode['climb'] ? speed.mode['climb'] : {id: 'climb', title: 'Climb', score: 15},
      fly: speed.mode['fly'] ? speed.mode['fly'] : {id: 'fly', title: 'Fly', score: 0},           
    }
  }

  increase = (mode) => {  
    let id = mode.id;
    this.setState({
      mode: {
        ...mode,
        score: mode.score + 5
      },
      [mode.id]: {
        ...mode,
        score: mode.score + 5
      }
    });
  }

  decrease = (mode) => {
    let id = mode.id;
    this.setState({
      mode: {
        ...mode,
        score: mode.score - 5
      },
      [mode.id]: {
        ...mode,
        score: mode.score - 5
      }
    });
  }


  setMode = (value) => {
    let modes = this.state.modes;
    let prevMode = this.state.mode;
    let nextMode = this.state[modes[value]]
    this.setState({
      modeInput: value,
      mode: nextMode,
      score: nextMode.score,
      [prevMode.id]: prevMode
    });
  }

  render(props) {
    let {
      mode,
      modes,
      modeInput,
      walk,
      climb,
      swim,
      fly,
      modalTitle,
    } = this.state;
    let { stats, onSubmit } = this.props;

    console.log("state in render():", this.state);
    return (
      <ModalWrapper
        {...this.props} title={modalTitle} 
        onSubmit={() =>
          onSubmit({
            id: stats.currentStatEditing.id,           
            currentMode: mode,
            modeInput: modeInput,
            walk: walk,
            climb: climb,
            swim: swim,
            fly: fly 
            })}>
        <View>
          <View style={{ alignItems: 'center', }}>
            <Text style={[styles.modalStatScore, ]}>{mode.score}</Text>
          </View>
          <Row style={{width: '100%', justifyContent: 'center'}}>
            <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={() => this.decrease(mode)}>
              <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={() => this.increase(mode)}>
              <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>+</Text>
            </TouchableOpacity>
          </Row>
          <View style={{ alignSelf: 'center', width: '85%', padding: 15 }}>
            <SegmentedControlTab values={['walk', 'swim', 'climb', 'fly']} 
              selectedIndex={modeInput} onTabPress={index => this.setMode(index)}
              tabsContainerStyle={styles.tabsContainerStyle} tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle} tabTextStyle={styles.tabTextStyle}
              activeTabTextStyle={styles.activeTabTextStyle}
            />
          </View>
        </View>
      </ModalWrapper>
    );
  }
}

export default ModalSpeedEditor;
