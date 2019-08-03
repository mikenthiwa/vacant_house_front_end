import React, {Component, Fragment} from 'react';
import {Text, View} from 'react-native';
import styles from './headerContentStyle';

class HeaderContent extends Component {

  renderCircles = (stage) => {
    const { circle, stages} = styles;
    return (
      <View style={circle}>
        <Text style={stages}>{stage}</Text>
      </View>
    )
  };
  render() {
    const { progressBarContainer, progressBar, headingTitleContainer,  headingTitle, headerCont} = styles;
    const {title} = this.props;
    return (
      <View style={headerCont}>
        {this.renderCircles(1)}
        <View style={progressBarContainer}>
          <View style={progressBar}/>
        </View>
        <View style={headingTitleContainer}>
          <Text style={headingTitle}>{title}</Text>
        </View>
        {this.renderCircles(2)}
        {this.renderCircles(3)}
      </View>
    );
  }
}

export default HeaderContent
