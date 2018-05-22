import React from 'react';
import { Slider, Switch, View, Text, TextInput, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';


import ModalWrapper from './ModalWrapper';
import Row from './Row';

import styles, { WHITE, BLACK, LIGHT_GREY } from '../Styles';
import { bonusCalc, initCalc, modScore } from '../Helpers';


class ModalArmorEditor extends React.Component {
  constructor(props) {
    super(props);
    let stat = this.props.stats.currentStatEditing;
    this.state = {
      stat: stat,
      score: stat.score ? stat.score : 0,
      title: stat.title ? stat.title : 'AC',
      baseType: stat.baseType ? stat.baseType : 'unarmored',
      baseScore: stat.baseScore ? stat.baseScore : 14,
      shield: stat.shield ? stat.shield : false,     
      itemBonus: stat.itemBonus ? stat.itemBonus : false,
      miscBonus: stat.miscBonus ? stat.miscBonus : false,
      types: { 0:"light", 1:"medium", 2:"heavy" },
      armorType: stat.armorType ? stat.armorType: 0,
      armorInput: stat.armorInput ? stat.armorInput : 11,
      naturalInput: stat.naturalInput ? stat.naturalInput : 10,
      naturalDex: false,
      shieldBonusScore: stat.shieldBonusScore ? stat.shieldBonusScore : 2,
      itemBonusScore: stat.itemBonusScore ? stat.itemBonusScore : 0,
      miscBonusScore: stat.miscBonusScore ? stat.miscBonusScore : 0, 
    }
  }


  changeText = (stateSlice, text) => {
    this.setState({
      [stateSlice]: text,      
    });
  };

  setArmorType = (value) => {
    let types = this.state.types;
    return this.setState(
      { baseType: types[value], armorType: value },
      () => this.setBaseArmor(types[value])
    );
  }

  setArmorInput = (value) => {   
    return this.setState(
      { armorInput: value },
      () => this.setBaseArmor(this.state.baseType)
    );
  }

  setNaturalInput = (value) => {
    this.setState(
      { naturalInput: value },
      () => this.setBaseArmor("natural")
    );
  }

  setNaturalDex = () => {
    this.setState(
      { naturalDex: !this.state.naturalDex }, 
      () => this.setBaseArmor("natural")
    );
  }

  setArmor = () => { 
    let { baseType, shield, itemBonus, miscBonus, baseScore, shieldBonusScore, itemBonusScore, miscBonusScore } = this.state;
    let armor = baseScore;
    if (shield && (baseType!=='monk')) armor += Number(shieldBonusScore);
    if (itemBonus) armor += Number(itemBonusScore);
    if (miscBonus) armor += Number(miscBonusScore);

    return armor;
  }

  setBaseArmor = (armorType) => {
    let stat = this.state.stat;
    let baseType = this.state.baseType;
    let dex = Number(this.props.stats['dex'].mod);
    let con = Number(this.props.stats['con'].mod);
    let wis = Number(this.props.stats['wis'].mod);
    let armorInput = Number(this.state.armorInput);
    let naturalInput = Number(this.state.naturalInput);
    let naturalDex = this.state.naturalDex;
    let armor;
    
    switch (armorType) {
      // case baseType:
      //   armor = 10 + dex;
      //   return this.setState({ baseType: "unarmored", baseScore: armor });

      case "unarmored":
        armor = 10 + dex;
        return this.setState({ baseType: "unarmored", baseScore: armor });

      case "light":
        armor = armorInput + dex;
        return this.setState({ baseType: "light", baseScore: armor });

      case "medium":
        if (dex > 2) dex = 2;
        armor = armorInput + dex;
        return this.setState({ baseType: "medium", baseScore: armor });

      case "heavy":
        armor = armorInput;
        return this.setState({ baseType: "heavy", baseScore: armor });

      case "monk":
        armor = 10 + dex + wis;
        return this.setState({ baseType: "monk", baseScore: armor });

      case "barbarian":
        armor = 10 + dex + con;
        return this.setState({ baseType: "barbarian", baseScore: armor });

      case "magic":
        armor = 13 + dex;
        return this.setState({ baseType: "magic", baseScore: armor });

      case "natural":
        if (!naturalDex) dex = 0;
        armor = naturalInput + dex;
        return this.setState({ baseType: "natural", baseScore: armor });
    }
  }

  render(props) {
    let { stat, title, baseType, types, armorType, armorInput, naturalInput, naturalDex, shield, itemBonus, miscBonus, baseScore, shieldBonusScore, itemBonusScore, miscBonusScore } = this.state;
    let { stats, onSubmit } = this.props;

    return <ModalWrapper {...this.props} title={title} onSubmit={() => onSubmit(
            {
              id: stats.currentStatEditing.id,
              score: this.setArmor(),
              baseType: baseType,
              shield: shield,
              armorType: armorType,
              armorInput: armorInput,
              naturalInput: naturalInput,
              naturalDex: naturalDex,
              itemBonus: itemBonus,
              miscBonus: miscBonus,
              baseScore: baseScore,
              shieldBonusScore: shieldBonusScore,
              itemBonusScore: itemBonusScore,
              miscBonusScore: miscBonusScore
            }
          )}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.modalStatScore]}>{this.setArmor()}</Text>
          </View>

          <Row style={{ marginTop: -30, marginBottom: 10, padding: 3, justifyContent: "space-around" }}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.modalNoteCardLabel}>Base</Text>
              <Text style={styles.modalLabel}>{baseScore}</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.modalNoteCardLabel}>Shield</Text>
              <Row style={{width: 'auto', justifyContent: 'center'}}>
                <Text style={styles.modalLabel}>{' +'}</Text>
                <TextInput value={String(shieldBonusScore)} onChangeText={text => this.changeText("shieldBonusScore", text)} style={[styles.modalLabel, {width: 24}]} keyboardType={"numeric"} maxLength={2} returnKeyType={'done'} keyboardAppearance={"dark"} />                
              </Row>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.modalNoteCardLabel}>Items</Text>
              <Row style={{width: 'auto', justifyContent: 'center'}}>
                <Text style={styles.modalLabel}>{' +'}</Text>
                <TextInput value={String(itemBonusScore)} onChangeText={text => this.changeText("itemBonusScore", text)} style={[styles.modalLabel, {width: 24}]} keyboardType={"numeric"} maxLength={2} returnKeyType={'done'} keyboardAppearance={"dark"} />                
              </Row>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.modalNoteCardLabel}>Misc.</Text>
              <Row style={{width: 'auto', justifyContent: 'center'}}>
                <Text style={styles.modalLabel}>{' +'}</Text>
                <TextInput value={String(miscBonusScore)} onChangeText={text => this.changeText("miscBonusScore", text)} style={[styles.modalLabel, {width: 24}]} keyboardType={"numeric"} maxLength={2} returnKeyType={'done'} keyboardAppearance={"dark"} />                
              </Row>
            </View>
          </Row>

          <Text style={[styles.modalNoteCardLabel, { alignSelf: "center" }]}>
            Armor Bonuses
          </Text>

          <Row style={{ padding: 3 }}>
            <View style={styles.modalSkillScoreContainer}>
              <Text style={styles.modalLabel}>Shield</Text>
            </View>
            <Switch value={baseType === "monk" ? false : shield} onValueChange={() => this.setState(
                  { shield: baseType === "monk" ? false : !shield }
                )} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
          </Row>

          <Row style={{ padding: 3 }}>
            <View style={styles.modalSkillScoreContainer}>
              <Text style={styles.modalLabel}>Item Bonus</Text>
            </View>
            <Switch value={itemBonus} onValueChange={() => this.setState({
                  itemBonus: !itemBonus
                })} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
          </Row>

          <Row style={{ padding: 3 }}>
            <View style={styles.modalSkillScoreContainer}>
              <Text style={styles.modalLabel}>Misc. Bonus</Text>
            </View>
            <Switch value={miscBonus} onValueChange={() => this.setState({
                  miscBonus: !miscBonus
                })} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
          </Row>

          <Text style={[styles.modalNoteCardLabel, { alignSelf: "center" }]}>
            Base Armor
          </Text>

          <Row style={{ padding: 3, display: baseType === "unarmored" ? "flex" : "none" }}>
            <View style={styles.modalSkillScoreContainer}>
              <Text style={styles.modalLabel}>Unarmored</Text>
            </View>
            <Switch value={ baseType === "unarmored"} onValueChange={() => this.setBaseArmor("unarmored")} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
          </Row>

          <View style={{display: baseType === "unarmored" || baseType === "light" || baseType === "medium" || baseType === "heavy" ? "flex" : "none" }}>
            <Row style={{ padding: 3 }}>
              <View style={styles.modalSkillScoreContainer}>
                <Text style={styles.modalLabel}>Worn Armor</Text>
              </View>
              <Switch value={ baseType === "light" || baseType === "medium" || baseType === "heavy"} onValueChange={() => this.setBaseArmor(baseType==="unarmored"? types[armorType] : "unarmored")} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
            </Row>
            <View style={{width: '78%', alignSelf: 'center', display: baseType === "armored" || baseType === "light" || baseType === "medium" || baseType === "heavy" ? "flex" : "none" }}>  
              <Row style={{ padding: 10 }}>
                <SegmentedControlTab values={['Light', 'Medium', 'Heavy']} 
                  onTabPress={index => this.setArmorType(index)} selectedIndex={armorType} 
                  tabContainerStyle={styles.tabContainerStyle} tabStyle={styles.tabStyle}
                  activeTabStyle={styles.activeTabStyle} tabTextStyle={styles.tabTextStyle}
                  activeTabTextStyle={styles.activeTabTextStyle}
                />  
              </Row>                        
              <Row style={{ padding: 5 }}>
                <Text style={[styles.modalLabel, {marginTop: 10}]}>{armorInput}</Text>
                <Slider style={{ width: 200}} value={armorInput} onValueChange={value => this.setArmorInput(value)} minimumValue={11} maximumValue={18} step={1} minimumTrackTintColor={LIGHT_GREY} maximumTrackTintColor={LIGHT_GREY} />
              </Row>
            </View>
          </View>

          <View style={{ display: baseType === "unarmored" || baseType === "barbarian" || baseType === "monk" ? "flex" : "none" }}>
            <Row style={{ padding: 3 }}>
              <View style={styles.modalSkillScoreContainer}>
                <Text style={styles.modalLabel}>Unarmored Defense</Text>
              </View>
              <Switch value={baseType === "monk" || baseType === "barbarian"} onValueChange={() => this.setBaseArmor(baseType === "unarmored" ? "barbarian" : "unarmored")} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
            </Row>
            <View style={{ width: "70%", alignSelf: "center", display: baseType === "barbarian" || baseType === "monk" ? "flex" : "none" }}>
              <Row style={{ justifyContent: "space-around" }}>
                <Text style={[styles.modalNoteCardLabel]}>Barbarian</Text>
                <Switch value={baseType === "monk"} onValueChange={() => this.setBaseArmor(baseType === "monk" ? "barbarian" : "monk")} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
                <Text style={[styles.modalNoteCardLabel]}>Monk</Text>
                <SegmentedControlTab values={['Barbarian', 'Monk']} 
                  onTabPress={index => this.setBaseArmor(['barbarian', 'monk'][index])}
                  tabsContainerStyle={styles.tabsContainerStyle} tabStyle={styles.tabStyle}
                  activeTabStyle={styles.activeTabStyle} tabTextStyle={styles.tabTextStyle}
                  activeTabTextStyle={styles.activeTabTextStyle}
                />
              </Row>
            </View>
          </View>

          <View style={{ display: baseType === "unarmored" || baseType === "magic" ? "flex" : "none" }}>
            <Row style={{ padding: 3 }}>
              <View style={styles.modalSkillScoreContainer}>
                <Text style={styles.modalLabel}>Mage Armor</Text>
              </View>
              <Switch value={baseType === "magic"} onValueChange={() => this.setBaseArmor(baseType==="unarmored" ? "magic" : "unarmored")} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
            </Row>
            <View style={{ display: baseType === "magic" ? "flex" : "none" }}>

            </View>
          </View>

           <View style={{display: baseType === "unarmored" || baseType === "natural" ? "flex" : "none" }}>
            <Row style={{ padding: 3 }}>
              <View style={styles.modalSkillScoreContainer}>
                <Text style={styles.modalLabel}>Natural Armor</Text>
              </View>
              <Switch value={ baseType === "natural" } onValueChange={() => this.setBaseArmor(baseType==="unarmored"? "natural" : "unarmored")} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
            </Row>
            <View style={{width: '78%', alignSelf: 'center', display: baseType === "natural" ? "flex" : "none" }}>
              <Row>
               <Text style={[styles.modalLabel, {marginTop: 10}]}>{naturalInput}</Text>
               <Slider style={{ width: 180}} value={naturalInput} onValueChange={value => this.setNaturalInput(value)} minimumValue={11} maximumValue={18} step={1} minimumTrackTintColor={LIGHT_GREY} maximumTrackTintColor={LIGHT_GREY} />
              </Row>
              <Row>
                <Text style={styles.modalNoteCardLabel}>+ dex</Text>
                <Switch value={naturalDex} onValueChange={() => this.setNaturalDex()} tintColor={WHITE} onTintColor={"rgba(0,0,0, 0.35)"} thumbTintColor={WHITE} />
              </Row>
            </View>
          </View>
        </View>
      </ModalWrapper>;
  }
  
}





export default ModalArmorEditor;