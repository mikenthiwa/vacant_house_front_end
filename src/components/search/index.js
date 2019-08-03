import React, { Component } from "react";
// import CheckBox from '@react-native-community/checkbox'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  CheckBox
} from 'react-native'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    return (
      <View style={style.Container}>
        <View style={style.SearchContainer}>
          <TextInput
            style={style.Input}
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={style.RoomLabel}>Bedrooms</Text>
        </View>
        <View style={style.RoomTypeContainer}>

          <View style={style.Room}>
            <Text>Bedsitter</Text>
            <CheckBox />
          </View>

          <View style={style.Room}>
            <Text>1</Text>
            <CheckBox />
          </View>

          <View style={style.Room}>
            <Text>2</Text>
            <CheckBox style={style.Room} />
          </View>
          <View style={style.Room}>
            <Text>3</Text>
            <CheckBox />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
  SearchContainer: {
    alignSelf: 'center',
  },
  Input: {
    borderColor: "gray",
    borderWidth: 1,
    width: 350,
    borderRadius: 10
  },
  RoomLabel: {
    alignSelf: 'center'
  },
  RoomTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: 20,
    paddingLeft: 20
  },
  Room: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
