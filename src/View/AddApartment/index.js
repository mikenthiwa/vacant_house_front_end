import React, {Component, Fragment} from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import Header from '../../components/Header';
import HeaderContent from '../../components/Header/headerContent';
import styles from './addApartmentStyle'

class AddApartment extends Component {


  handleOnChangeText = (text) => {
    console.log(text)
  };

  renderInputLabel = (label) => {
    const {inputLabelContainer, labelName, textInput} = styles;
    return (
      <View style={inputLabelContainer}>
        <Text style={labelName}>{label}</Text>
        <TextInput style={label === 'House Number' ? {...textInput, width: 105} : textInput} onChangeText={this.handleOnChangeText}/>
      </View>
    );
  };

  renderNext = () => {
    const {navigation: {navigate}} = this.props;
    navigate('AddImage')
  };

  render() {
    const {
      bodyContainer,
      button
    } = styles;
    return (
        <Fragment >
          <Header>
            <HeaderContent title='Provide house details'/>
          </Header>
          <ScrollView style={bodyContainer}>
              {this.renderInputLabel('Building Name')}
              {this.renderInputLabel('Location')}
              {this.renderInputLabel('Number of rooms')}
              {this.renderInputLabel('House Number')}
            <View style={button}>
              <Button
                title='Next'
                onPress={this.renderNext}
                color='#3657a9'
              />
            </View>
          </ScrollView>
        </Fragment>
    );
  }
}


export default AddApartment
