import React from "react";
import {
  SegmentedControlIOS,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet
} from "react-native";

import ModalWrapper from "./ModalWrapper";
import StatCard from "./StatCard";
import Row from "./Row";

import styles, { BLUE, RED, WHITE, BLACK, LIGHT_GREY } from "../Styles";
import { fillPool } from "../Helpers";

class ModalHitDieEditor extends React.Component {
  constructor(props) {
    super(props);
    let stat = this.props.stats.currentStatEditing;
    this.state = {
      stat: stat,
      sizes: stat.sizes,
      pool: fillPool(stat),
      d6: stat.pool['d6'] ? stat.pool['d6'] : { id: 'd6', count: 0, max: 0},
      d8: stat.pool['d8'] ? stat.pool['d8'] : { id: 'd8', count: 0, max: 0},
      d10: stat.pool['d10'] ? stat.pool['d10'] : { id: 'd10', count: 0, max: 0},
      d12: stat.pool['d12'] ? stat.pool['d12'] : { id: 'd12', count: 0, max: 0},
      selectedIndex: 0
    };
  }

  increase = (dx) => {
    let dice = this.state[dx];
    this.setState({
      ...this.state,
      [dx]: {
        ...dice,
        count: ((dice.count < dice.max) ? dice.count + 1 : dice.max)
      }
    });
    
  };

  decrease = (dx) => {
    let dice = this.state[dx];
    this.setState({
      ...this.state,
      [dx]: {
        ...dice,
        count: ((dice.count > 0) ? dice.count - 1 : 0)
      }
    });
  };

  render(props) {
    let { stat, pool, sizes, d6, d8, d10, d12, selectedIndex } = this.state;
    let { stats, onSubmit, title = "Hit Dice", } = this.props;

    return <ModalWrapper {...this.props} title={title} onSubmit={() => 
      onSubmit({
        id: stat.id,
        d6: d6,
        d8: d8,
        d10: d10,
        d12: d12,
      })
    }>
        <View style={{ width: '84%', alignSelf: 'center', marginTop: 15 }}>
          <SegmentedControlIOS values={pool} selectedIndex={selectedIndex}
          tintColor={WHITE} 
          onChange={event => this.setState({
                selectedIndex: event.nativeEvent.selectedSegmentIndex
              })} 
            />
        </View>        
        {
          Object.values(pool).map((dice, index) => {
            return <View key={dice.id+String(index)} style={{ display: selectedIndex === index ? "flex" : "none" }}>
              <Row style={{ width: '100%', justifyContent: 'center', padding: 20 }}>
                <Text style={styles.modalStatScore }>{this.state[dice].count + '/' + this.state[dice].max}</Text>
              </Row>
              <Row style={{width: '100%', justifyContent: 'center'}}>
                <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20 }} 
                  onPress={() => this.decrease(dice)}>
                  <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20 }} 
                  onPress={() => this.increase(dice)}>
                  <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>+</Text>
                </TouchableOpacity>
              </Row>
            </View>
          })
        }        
      </ModalWrapper>;
  }
}

export default ModalHitDieEditor;
