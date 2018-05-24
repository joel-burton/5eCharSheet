import React from 'react';
import { Picker, TouchableOpacity, SegmentedControlIOS, Switch, View, Text, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import ModalWrapper from './ModalWrapper';
import StatCard from './StatCard';
import Row from './Row';

import styles, { WHITE, BLACK, LIGHT_GREY } from '../Styles';
import { bonusCalc, initCalc, modScore } from '../Helpers';


class ModalStatEditor extends React.Component {
  constructor(props) {
    super(props);
    let stat = this.props.stats.currentStatEditing;
    this.state = {
      stat: stat,
      modalTitle: stat.title ? stat.title : "Update Score",
      score: stat.score ? stat.score : 0,
      save: stat.save ? stat.save : 0,
      mod: stat.mod ? stat.mod: 0,
      saveProficient: stat.proficient ? stat.proficient : false,
      skills: stat.skills ? stat.skills : [],
      profBonus: this.props.stats['prof'].score ? this.props.stats['prof'].score : "",
      jack: this.props.stats['prof'].jack ? this.props.stats['prof'].jack : false,
      champ: this.props.stats['prof'].champ ? this.props.stats['prof'].champ : false,
      proficiency: this.props.stats['prof'],
      extraModAbility: stat.extraModAbility ? stat.extraModAbility : 0,
      extraModScore: stat.extraModScore ? stat.extraModScore : 0,
      abilities: { 0: {id: 'cha', title: 'Charisma'}, 1: {id: 'con', title: 'Constitution'}, 2: {id: 'dex', title: 'Dexterity'}, 3: {id: 'int', title: 'Intelligence'}, 4: {id: 'str', title: 'Strength'}, 5: {id: 'wis', title: 'Wisdom'} },
      abilityInput: stat.abilityInput ? stat.abilityInput : 10,
    }
  }


  increaseScore = (score, skills) => {
    let newScore = score+1;
    let newSkills = [];
    skills.forEach(skill =>
      newSkills.push({...skill, score:  bonusCalc(skill, this.state.mod, this.state.proficiency)})
    )
    this.setState({
      score: newScore,
      save: (modScore(newScore)+(this.state.saveProficient ? this.state.profBonus : 0)),
      mod: modScore(newScore),
      skills: newSkills,
    });
  }

  decreaseScore = (score, skills) => {
    let newScore = score-1;
    let newSkills = [];
    skills.forEach(skill =>
      newSkills.push({...skill, score: bonusCalc(skill, this.state.mod, this.state.proficiency)})
    )
    this.setState({
      score: newScore,
      save: (modScore(newScore)+(this.state.saveProficient ? this.state.profBonus : 0)),
      mod: modScore(newScore),
      skills: newSkills,
    });
  }

  toggleProficient = (stateSlice, scoreToAdd) => {
    let newState = { 
      [stateSlice]: this.state[stateSlice] ? false : true,
      [scoreToAdd]: this.state[scoreToAdd] + (!this.state[stateSlice] ? +this.state.profBonus : -this.state.profBonus)
     }
    this.setState({
      ...newState
    });
  }

  toggleSkillProf = (id) => {
    let newSkills = [];
    this.state.skills.forEach(skill => {
      if (id === skill.id) {
        newSkills.push({id: skill.id, proficient: !skill.proficient, score:  bonusCalc(skill, this.state.mod, this.state.proficiency)+(!skill.proficient ? 0 : -this.state.profBonus)})
      } else {
        newSkills.push({id: skill.id, proficient: skill.proficient, score: bonusCalc(skill, this.state.mod, this.state.proficiency)})
      }
        
    });
    this.setState({...this.state, skills: newSkills});
  }

  setAbility = (value) => {
    let abilities = this.state.abilities; 
    let key = abilities[value].id;
    let current = this.props.stats[key];
    this.setState({
      stat: {
        ...this.state.stat,
        extraModAbility: value,
        extraModScore: current.mod,
        abilityInput: value,
      }      
    }, this.handleAbilityInput(value));
  }

  handleAbilityInput = (index) => {
    this.setState({
      abilityInput: index    
    })
  }

  changeText = (stateSlice, text) => {
    this.setState({
      [stateSlice]: text,      
    });
  };

  render(props) {
    let { stat, score, save, mod, saveProficient, profBonus, skills, jack, champ, proficiency, modalTitle, alert, extraMod, extraModAbility, extraModScore, abilities, abilityTitles, abilityInput } = this.state;
    let { stats, onSubmit, type='',  } = this.props;

    return <ModalWrapper {...this.props} title={modalTitle} onSubmit={() => onSubmit({id: stats.currentStatEditing.id , score: score, save: save, mod: mod, proficient: saveProficient, skills: skills, jack: jack, champ: champ, alert: alert, extraMod: stat.extraMod, extraModAbility: stat.extraModAbility, extraModScore: stat.extraModScore, abilityInput: stat.abilityInput  })}>
      <View>
        <View style={{ alignItems: 'center', display: (type !== 'stat') ? 'flex' : 'none' }}>
          <Text style={[styles.modalStatScore, {display: (type !== 'init') ? 'flex' : 'none' }]}>{score}</Text>
          <Text style={[styles.modalStatScore, {display: (type === 'init') ? 'flex' : 'none' }]}>{bonusCalc(stat, stats['dex'].mod, proficiency)+(stat.alert ? 5 : 0)+(stat.extraMod ? stat.extraModScore : 0)}</Text>
        </View>

        <View style={{ alignItems: 'center', display: (type === 'stat') ? 'flex' : 'none' }}>
          <StatCard key={"modalStatCard"} style={{ width: "60%"}} statScore={score} label1={"Save"} score1={save} label2={"Modifier"} score2={mod} color={'rgba(0,0,0,0)'} disablePress={true} />    
        </View>

        <Row style={{display: ((type === 'stat') ? 'flex' : 'none') ,width: '100%', justifyContent: 'center'}}>
          <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={() => this.decreaseScore(score, skills)}>
            <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{height: 48, width: 48, borderRadius: 48, backgroundColor: WHITE, alignItems: 'center', justifyContent: 'center', margin: 14, marginTop: -20}} onPress={() => this.increaseScore(score, skills)}>
            <Text style={{ fontSize: 40, color: "rgba(80,80,80, 0.35)", marginTop: -5 }}>+</Text>
          </TouchableOpacity>
        </Row>

        <Text style={[styles.modalLabel, {fontSize: 22, alignSelf: 'center', padding: 6, display: (type === 'stat') ? 'flex' : 'none'}]}> Proficiencies </Text>
        
        <View style={[{ display: (type==='init') ? 'flex' : 'none' }]}>
          <Row style={{ padding: 3 }}>
            <View style={styles.modalSkillScoreContainer}>
              <Text style={styles.modalLabel}>Dexterity Modifier</Text>
              <Text style={styles.modalLabel}>{(stats['dex'].mod < 0 ? '' : '+') + stats['dex'].mod}</Text>
            </View>
            <Switch value={true} disabled={true} tintColor={WHITE} onTintColor={'rgba(0,0,0, 0.35)'} thumbTintColor={WHITE}/>
          </Row>
          <Row style={{ padding: 3 }}>
            <View style={styles.modalSkillScoreContainer}>
              <Text style={styles.modalLabel}>{champ ? 'Remarkable Athlete' : 'Jack of All Trades'}</Text>
              <Text style={styles.modalLabel}>{'+'+(champ ? Math.ceil(profBonus/2) : Math.floor(profBonus/2))}</Text>
            </View>
            <Switch value={champ ? champ : jack} disabled={true} tintColor={WHITE} onTintColor={'rgba(0,0,0, 0.35)'} thumbTintColor={WHITE}/>
          </Row>
          <Row style={{ padding: 3 }}>
            <View style={styles.modalSkillScoreContainer}>
              <Text style={styles.modalLabel}>Alert</Text>
              <Text style={styles.modalLabel}>{'+5'}</Text>
            </View>
            <Switch value={stat.alert} onValueChange={()=>this.setState({stat: {...stat, alert: !stat.alert}})} tintColor={WHITE} onTintColor={'rgba(0,0,0, 0.35)'} thumbTintColor={WHITE}/>
          </Row>
          <View>
            <Row style={{ padding: 3 }}>
              <View style={styles.modalSkillScoreContainer}>
                <Text style={styles.modalLabel}>Extra Ability Modifier</Text>
                <Text style={styles.modalLabel}>{((stat.extraModScore >= 0)? '+' : '') + stat.extraModScore }</Text>
              </View>
              <Switch value={stat.extraMod} onValueChange={()=>this.setState({stat: {...stat, extraMod: !stat.extraMod}})} tintColor={WHITE} onTintColor={'rgba(0,0,0, 0.35)'} thumbTintColor={WHITE}/>
            </Row>
            <View style={{ width: '100%', alignItems: 'center', marginTop: 6, display: stat.extraMod ? 'flex': 'none' }}>
              <SegmentedControlTab 
                values={['Cha', 'Con', 'Dex', 'Int', 'Str', 'Wis' ]} 
                selectedIndex={abilityInput} 
                onTabPress={value => this.setAbility(value)}
                tabsContainerStyle={styles.tabsContainerStyle}
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.activeTabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabTextStyle={styles.activeTabTextStyle}  
              />
            </View>
          </View>  
        </View>

        <Row style={{ padding: 3, display: (type === 'stat') ? 'flex' : 'none'  }}>
          <View style={styles.modalSkillScoreContainer}>
            <Text style={styles.modalLabel}>Saving Throws</Text>          
            <Text style={styles.modalLabel}>{(save < 0 ? '' : '+') + save}</Text>
          </View>
          <Switch value={saveProficient} onValueChange={()=>this.toggleProficient("saveProficient", "save")} tintColor={WHITE} onTintColor={'rgba(0,0,0, 0.35)'} thumbTintColor={WHITE}/>
        </Row>

        <Row style={{ padding: 3, display: (type === 'prof') ? 'flex' : 'none'  }}>
          <View style={styles.modalSkillScoreContainer}>
            <Text style={styles.modalLabel}>Jack of All Trades</Text>
            <Text style={styles.modalLabel}>{((Math.floor(score/2) < 0) ? '' : '+') + (Math.floor(score/2))}</Text>          
          </View>
          <Switch value={jack} onValueChange={()=>this.setState({jack: !jack})} tintColor={WHITE} onTintColor={'rgba(0,0,0, 0.35)'} thumbTintColor={WHITE}/>
        </Row>

        <Row style={{ padding: 3, display: (type === 'prof') ? 'flex' : 'none'  }}>
          <View style={styles.modalSkillScoreContainer}>
            <Text style={styles.modalLabel}>Remarkable Athlete</Text>
            <Text style={styles.modalLabel}>{((Math.ceil(score/2) < 0) ? '' : '+') + (Math.ceil(score/2))}</Text>          
          </View>
          <Switch value={champ} onValueChange={()=>this.setState({champ: !champ})} tintColor={WHITE} onTintColor={'rgba(0,0,0, 0.35)'} thumbTintColor={WHITE}/>
        </Row>

          { skills.map((skill, index) => 
            <Row key={skill.id} style={{ padding: 3 }}>
              <View style={styles.modalSkillScoreContainer}>
                <Text style={styles.modalLabel}>{skill.id}</Text>                
                <Text style={styles.modalLabel}>{(bonusCalc(skill, mod, proficiency) < 0 ? '' : '+') + bonusCalc(skill, mod, proficiency)}</Text>
              </View>
              <Switch value={skill.proficient} onValueChange={()=>this.toggleSkillProf(skill.id)} tintColor={WHITE} onTintColor={'rgba(0,0,0, 0.35)'} thumbTintColor={WHITE} />
            </Row>
          )}  

      </View>
    </ModalWrapper>
  }
  
}





export default ModalStatEditor;