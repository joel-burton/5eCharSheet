import React from "react";
import { Text, TouchableOpacity, View } from "react-native";


class Drawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      disabled: this.props.disablePress
    };
  }

  toggleDrawer = (state) => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  drawerStyle = () => {
    return { display: this.state.drawerOpen ? "flex" : "none" };
  }

  disableDrawer = () => {

  }

  render(props) {

    const {onLongPress=()=>{}, children } = this.props;

    return <View>
      <TouchableOpacity onPress={this.state.disabled ? ()=>{} : this.toggleDrawer} onLongPress={this.state.disabled ? ()=>{} : onLongPress} activeOpacity={this.state.disabled ? 1 : 0.5}>
        { children[0] }
        <View style={ this.drawerStyle(this.state.drawerOpen) }>
        { children.slice(1) }
        </View>
      </TouchableOpacity>  
      
  </View>;
  }
  
    
}


export default Drawer;