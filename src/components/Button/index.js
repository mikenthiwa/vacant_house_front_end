import React,{Component}  from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './buttonStyle';

class Button extends Component {
  render() {
    const {name, ButtonStyle} = this.props;
    const {styleText} = style;
    return (
      <TouchableOpacity style={ButtonStyle}>
        <Text style={styleText}>{name}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
