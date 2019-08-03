import React, {Component} from 'react';
import { View } from 'react-native';
import styles from './headerStyles'

class Header extends Component {
  render() {
    const {headerContainer} = styles;
    return (
      <View style={headerContainer}>
        {this.props.children}
      </View>

    );
  }
}

export default Header;
