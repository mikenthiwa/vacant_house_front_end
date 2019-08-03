import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './sideBarStyles';

class SideBar extends Component {

  renderProfilePic = () => (
    <View style={styles.profileContainer}>
      <View style={styles.Profile}/>
    </View>
  );


  renderMenuItems = (menuTitle, nextScreen) => {
    const {navigate} = this.props;
    return (
      <View style={styles.menuItemsContainer}>
      <TouchableOpacity onPress={() => navigate(nextScreen)}>
        <Text style={styles.menuItems}>{menuTitle}</Text>
      </TouchableOpacity>
    </View>
    )
  };


  render() {
    return (
      <View style={styles.sideBar}>
        {this.renderProfilePic()}
        <View style={styles.menuContainer}>
          {this.renderMenuItems('Add Apartment', 'AddApartment')}
          {this.renderMenuItems('Settings', '')}

        </View>
      </View>
    );
  }
}

export default SideBar


