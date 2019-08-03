import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import style from './style'
import { CheckBox } from 'react-native-elements';
import SearchIcon from '../../../assets/Icons/searchIcon.svg';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  onChange = text => this.setState({text});

  renderCheckBox = roomType => (
    <View style={style.Room}>
      <Text style={style.RoomType}>{roomType}</Text>
      <CheckBox style={style.CheckBox} />
    </View>
  );

  renderSearchIcon = () => (
    <SearchIcon
      style={style.Search}
      width={30}
      height={25}
    />
  );

  render() {
    return (
      <View style={style.Container}>
        <View style={style.SearchContainer}>
          {this.renderSearchIcon()}
          <TextInput
            style={style.Input}
            onChangeText={this.onChange}
            placeholder="Search for places"
          />
          <Text style={style.RoomLabel}>Bedrooms</Text>
        </View>
        <View style={style.RoomTypeContainer}>
          {this.renderCheckBox('Bedsitter')}
          {this.renderCheckBox(1)}
          {this.renderCheckBox(2)}
          {this.renderCheckBox(3)}
        </View>
      </View>
    )
  }
}


