import React, {Component, Fragment} from 'react';
import Header from '../../components/Header';
import { View, TouchableOpacity } from 'react-native'
import HeaderContent from '../../components/Header/headerContent';
import UploadButton from '../../components/Button';
import style from './addApartmentStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons'



class AddImage extends Component {
  render() {
  const {addImageBody, uploadButton, imageContainer, nextBackButton, uploadButtonContainer, downloadIcon} = style;
    return (
      <Fragment>
        <Header>
          <HeaderContent title='Upload apartment image'/>
        </Header>
        <View style={addImageBody}>
          <View style={uploadButtonContainer}>
            <UploadButton name='Upload' ButtonStyle={uploadButton} />
          </View>
          <View style={imageContainer}>
            <TouchableOpacity>
              <FontAwesomeIcon style={downloadIcon} icon={faDownload} size={30}/>
            </TouchableOpacity>
          </View>
          <View style={nextBackButton}>
            <UploadButton  name='Back' ButtonStyle={{...uploadButton, borderRadius: 20, width: 90}}/>
            <UploadButton name='Next' ButtonStyle={{...uploadButton, borderRadius: 20, width: 90}} />
          </View>
        </View>
      </Fragment>
    );
  }
}

export default AddImage;
