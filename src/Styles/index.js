import { StyleSheet } from 'react-native';

export const RED          = '#DB4040';
export const GREEN        = '#219653';
export const LIGHT_BLUE   = '#96e0f7';
export const BLUE         = '#2975DB';
export const VIOLET       = '#8D4ACB';
export const YELLOW       = '#E0B32A';
export const ORANGE       = '#DB7C27';
export const WHITE        = '#F1F1F1';
export const LIGHT_GREY   = '#888';
export const GREY         = '#555';
export const DARK_GREY    = '#333';
export const XT_DARK_GREY = '#242424';
export const BLACK        = '#000';
export const SHADOW       = 'rgba(0,0,0, 0.3)';

const styles = StyleSheet.create({
  armorCard: {
    backgroundColor: LIGHT_GREY,
    height: 90,
    width: 80
  },
  armorLabel: {
    marginTop: 10
    // fontSize: 12
  },
  armorScore: {
    fontSize: 39
  },
  attackCard: {
    width: "100%",
    height: 64,
    borderRadius: 10
  },
  attackCardLabel: {
    fontSize: 12,
    marginTop: -12,
    textAlign: "center",
    color: WHITE
  },
  block: {
    flex: 0.01,
    width: "92%",
    alignSelf: "center",
    alignItems: "center",
    paddingBottom: 20
    // borderStyle: 'solid',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  blockContainer: {
    height: "auto",
    width: "100%",
    minHeight: 635
    // borderStyle: "solid",
    // borderColor: "pink",
    // borderWidth: 1
  },
  cardDefault: {
    backgroundColor: GREY,
    height: 71,
    width: 80,
    borderRadius: 10
    // borderStyle: 'solid',
    // borderColor: 'blue',
    // borderWidth: 1
  },
  characterName: {
    fontSize: 20,
    color: WHITE,
    margin: 2,
    marginTop: -18
  },
  column: {
    flex: 1,
    height: "auto",
    alignItems: "center"
    // borderStyle: 'solid',
    // borderColor: 'orange',
    // borderWidth: 1
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: BLACK,
    alignItems: "center"
    // borderStyle: 'solid',
    // borderColor: 'green',
    // borderWidth: 1,
  },
  description: {
    fontSize: 16,
    color: WHITE,
    padding: 6
  },
  fillerFooter: {
    flex: 10,
    alignSelf: "stretch",
    minHeight: 20
    // borderStyle: "solid",
    // borderColor: "green",
    // borderWidth: 1
  },
  hitDieScore: {
    marginTop: 4,
    fontSize: 26
  },
  hpCard: {
    backgroundColor: RED,
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  hpCardTemp: {
    // backgroundColor: RED,
    // height: 90,
    // width: 90,
    // borderRadius: 100,
    // borderWidth: 2,
    // borderColor: BLUE
    color: LIGHT_BLUE
  },
  labelDefault: {
    marginTop: 6,
    fontSize: 18,
    textAlign: "center",
    color: WHITE
  },
  loadingView: {
    height: "100%",
    width: "100%",
    backgroundColor: BLACK
  },
  mainApp: {
    flex: 1,
    width: "100%",
    backgroundColor: BLACK
  },
  mainBlock: {
    marginTop: 20,
    flex: 1,
    minHeight: 642
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'pink'
  },
  modalLabel: {
    color: WHITE,
    fontSize: 18
  },
  modalNoteCardLabel: {
    color: "#bbb",
    fontSize: 16
  },
  modalSkillScoreContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
    paddingRight: 10
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'pink'
  },
  modalStatScore: {
    paddingTop: 6,
    paddingBottom: 30,
    width: 100,
    fontSize: 38,
    letterSpacing: -0.5,
    textAlign: "center",
    color: "#f1f1f1",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 6 },
    textShadowRadius: 6
  },
  noteCard: {
    flex: 1,
    backgroundColor: BLACK,
    borderRadius: 10,
    alignItems: "center",
    margin: 1,
    marginTop: 6
  },
  noteCardInput: {
    width: "100%",
    color: WHITE,
    fontSize: 16,
    padding: 8
  },
  noteCardLabel: {
    // marginTop: 4,
    fontSize: 16,
    color: "#aaa"
  },
  notesDrawer: {
    width: "100%"
    // paddingBottom: 100
  },
  proficiencyCardLabel: {
    fontSize: 14
  },
  row: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "auto",
    justifyContent: "space-between",
    alignItems: "flex-start"
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1
  },
  scoreDefault: {
    fontSize: 36,
    letterSpacing: -0.5,
    textAlign: "center",
    color: WHITE,
    textShadowColor: SHADOW,
    textShadowOffset: { width: 1, height: 6 },
    textShadowRadius: 6
  },
  secondaryScore: {
    marginTop: -4,
    fontSize: 26,
    letterSpacing: -0.5,
    textAlign: "center",
    color: WHITE,
    textShadowColor: SHADOW,
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 6
  },
  speedScore: {
    fontSize: 32
  },
  spellCard: {
    marginTop: 4,
    padding: 3,
    backgroundColor: GREY,
    borderRadius: 6,
    width: 310,
    alignSelf: "center",
    // borderStyle: 'solid',
    // borderColor: 'cyan',
    // borderWidth: 1,
    zIndex: 1
  },
  spellDrawer: {
    width: 310,
    paddingTop: 22,
    marginTop: -20,
    backgroundColor: GREY,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    zIndex: -1
    // borderStyle: 'solid',
    // borderColor: 'cyan',
    // borderWidth: 1,
  },
  spellLevelCard: {
    flex: 1,
    width: 325,
    borderRadius: 8,
    padding: 8,
    marginTop: 4,
    alignSelf: "center",
    backgroundColor: XT_DARK_GREY,
    zIndex: 3
  },
  spellLevelDescriptionCard: {
    backgroundColor: XT_DARK_GREY,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: "center",
    width: 325,
    paddingTop: 15,
    marginTop: -13,
    zIndex: -2
  },
  spellTitle: {
    fontSize: 20,
    color: WHITE,
    paddingLeft: 6,
    textShadowColor: SHADOW,
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 6
  },
  statBlock: {
    width: 100,
    alignContent: "center"
    // borderStyle: 'solid',
    // borderColor: 'white',
    // borderWidth: 1
  },
  statCardContainer: {
    height: "auto",
    minHeight: 70,
    width: 166,
    borderRadius: 10,
    marginBottom: 12
    // borderStyle: "solid",
    // borderColor: "silver",
    // borderWidth: 1
  },
  statCardLabel: {
    fontSize: 12,
    marginTop: -2,
    textAlign: "center",
    color: "#f1f1f1"
  },
  statCardProfLabel: {
    fontSize: 15,
    textAlign: "left",
    color: "#f1f1f1"
  },
  statCardModText: {
    width: 54,
    marginTop: -4,
    fontSize: 26,
    letterSpacing: -0.5,
    textAlign: "center",
    color: "#f1f1f1",
    textShadowColor: SHADOW,
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 4
  },
  statCardProfRow: {
    paddingLeft: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    width: "94%"
  },
  statCardProfScore: {
    fontSize: 15,
    textAlign: "right",
    color: "#f1f1f1"
  },
  statCardRow: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between"
  },
  statCardScore: {
    marginTop: -5,
    width: 58,
    fontSize: 38,
    letterSpacing: -0.5,
    textAlign: "center",
    color: "#f1f1f1",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 6 },
    textShadowRadius: 6
  },
  statCardTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#f1f1f1"
  },
  statRow: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around"
  },
  statScore: {
    marginTop: -11,
    width: 58,
    fontSize: 38,
    letterSpacing: -0.5,
    textAlign: "center",
    color: WHITE,
    textShadowColor: SHADOW,
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 6
  },
  statusBar: {
    width: "100%",
    height: 20,
    // backgroundColor: BLACK,
    zIndex: 20,
    position: "relative"
    // opacity: 50,
    // borderStyle: "solid",
    // borderColor: "blue",
    // borderWidth: 1
  },
  tabsContainerStyle: {
    backfaceVisibility: "hidden"
  },
  tabStyle: {
    backgroundColor: "rgba(0,0,0, 0)",
    borderColor: WHITE
  },
  activeTabStyle: {
    backgroundColor: WHITE
  },
  tabTextStyle: {
    color: WHITE
  },
  activeTabTextStyle: {
    color: "rgba(0,0,0, 0.66)"
  },
  text: {
    fontSize: 20,
    color: WHITE
  },
  textOutline: {
    textShadowColor: LIGHT_BLUE,
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: WHITE,
    paddingBottom: 6
    // borderStyle: 'solid',
    // borderColor: 'white',
    // borderWidth: 1
  },
  weaponCard: {
    flex: 1,
    borderRadius: 8,
    padding: 8,
    marginTop: 4,
    width: 325,
    backgroundColor: XT_DARK_GREY,
    zIndex: 1
  },
  weaponCardDrawer: {
    width: 325,
    paddingTop: 22,
    marginTop: -20,
    backgroundColor: XT_DARK_GREY,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    zIndex: -2
  },
  weaponLabel: {
    margin: 3,
    paddingLeft: 6,
    fontSize: 14,
    textAlign: "center",
    color: WHITE,
    fontStyle: "italic"
  },
  weaponText: {
    fontSize: 20,
    textAlign: "right",
    color: WHITE,
    textShadowColor: SHADOW,
    textShadowOffset: { width: 1, height: 6 },
    textShadowRadius: 6
  },
  weaponTextSmall: {
    margin: 3,
    paddingRight: 8,
    fontSize: 14,
    textAlign: "center",
    color: WHITE,
    textShadowColor: SHADOW,
    textShadowOffset: { width: 1, height: 6 },
    textShadowRadius: 6
  }
});

export default styles;