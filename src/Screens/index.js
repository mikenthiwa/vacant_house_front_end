import React, {Component, Fragment} from 'react';
import App from '../View/Home/App';

class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Fragment>
        <App navigation={navigation}/>
      </Fragment>
    );
  }
}

export default HomeScreen
