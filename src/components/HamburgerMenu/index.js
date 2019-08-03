import React, {Component} from 'react';
import HamburgerIcon from '../../../assets/Icons/HamburgerMenu.svg';
import {
  View, TouchableOpacity
} from 'react-native'

class HamburgerMenu extends Component {

  renderOpacity = () => {
    const {openSideBar} = this.props;
    return (
      <TouchableOpacity onPress={openSideBar}>
        <HamburgerIcon/>
      </TouchableOpacity>
    )
  };

  render() {
    return (
      <View>
        {this.renderOpacity()}
      </View>
    );
  }
}

export default HamburgerMenu
