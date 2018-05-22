import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import SegmentedControlTab from 'react-native-segmented-control-tab';

import ModalWrapper from "./ModalWrapper";
import Row from "./Row";

import styles, { BLUE, LIGHT_BLUE, RED, WHITE, BLACK, LIGHT_GREY } from "../Styles";


class ModalHpMax extends React.Component {
  constructor(props) {
    super(props);
    let stat = this.props.stats.currentStatEditing;
    this.state = {
      stat: stat,
      score: stat.score ? stat.score : 0,
      max: stat.max ? stat.max : '',
      temp: stat.temp ? stat.temp : 0,
      deltaInput: 1,
      selectedIndex: 0
    };
  }

  handleTabInput = (index) => {
    this.setState({
      selectedIndex: index
    })
  }

  increaseMax = () => {
    this.setState({
      max: this.state.max += 1
    });
  }

  decreaseMax = () => {
    if (this.state.max > 1) {
      this.setState({
        max: this.state.max -= 1 
      });     
    }
  }

  increaseTemp = () => {
    this.setState({
      temp: this.state.temp += 1,
      score: this.state.score += 1
    });
  }

  decreaseTemp = () => {
    if (this.state.temp > 0) {
      this.setState({
        temp: this.state.temp -= 1,
        score: this.state.score -= 1
      });
    } 
  }


  render(props) {
    let {
      stat,
      temp,
      max,
      score, 
      deltaInput,
      selectedIndex,
    } = this.state;
    let { onSubmit } = this.props;



    return (
      <ModalWrapper {...this.props} title={'Temp/Max Hit Points'} onSubmit={()=> onSubmit({ id: stat.id, temp: temp, max: max, score: ((score-temp) > max) ? (max + temp) : score })}>
        <View>
          <View style={{ margin: 20 }}>
            <SegmentedControlTab 
              values={['Temporary', 'Maximum']} 
              selectedIndex={selectedIndex}
              onTabPress={index => this.handleTabInput(index)}
              tabsContainerStyle={styles.tabsContainerStyle}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTabStyle}
              tabTextStyle={styles.tabTextStyle}
              activeTabTextStyle={styles.activeTabTextStyle}  
            />
          </View>
          <View style={{ display: (selectedIndex===0) ? 'flex' : 'none' }}>
            <Row style={{ justifyContent: "center" }}>
              <Text style={[styles.modalStatScore, { width: 'auto', color: LIGHT_BLUE }]}>
                {temp}
              </Text>
            </Row>
            <Row style={{ width: '100%', justifyContent: 'center' }}>
              <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={this.decreaseTemp}>
                <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={this.increaseTemp}>
                <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>+</Text>
              </TouchableOpacity>
            </Row>
          </View>
          <View style={{ display: (selectedIndex===1) ? 'flex' : 'none' }}>
            <Row style={{ justifyContent: "center" }}>
              <Text style={[styles.modalStatScore, { width: 'auto' }]}>
                {max}
              </Text>
            </Row>
            <Row style={{ width: '100%', justifyContent: 'center' }}>
              <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={this.decreaseMax}>
                <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={this.increaseMax}>
                <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>+</Text>
              </TouchableOpacity>
            </Row>
          </View>
          
          

 
        </View>
      </ModalWrapper>
    );
  }
}

export default ModalHpMax;
