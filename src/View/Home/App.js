/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, Fragment} from 'react';
import { View } from 'react-native'
import HamburgerMenu from '../../components/HamburgerMenu';
import SearchBarComponent from "../../components/search";
import style from './homeStyle'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openSideBar = () => {
    const {navigation: {toggleDrawer}} = this.props;
    toggleDrawer()
  };

  render() {
    return (
        <View style={style.homeContainer}>
          <Fragment>
            <View style={style.hamburger}>
                <HamburgerMenu openSideBar={this.openSideBar} />
            </View>
            <View style={style.searchContainer}>
              <SearchBarComponent/>
            </View>
          </Fragment>
        </View>
    );
  }
}

export default App;
