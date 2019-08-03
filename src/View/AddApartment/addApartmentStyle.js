import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  bodyContainer: {
    paddingTop: 30,
    paddingLeft: 30,
    flex: 1,
    flexDirection: 'column',
    paddingRight: 30,
  },
  inputLabelContainer: {
    marginBottom: 25,
  },
  labelName: {
    color: '#313131',
    fontSize: 15,
    marginBottom: 5,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  textInput: {
    borderColor: "#cecece",
    borderWidth: 1,
    width: Dimensions.get('window').width / 1.4,
    borderRadius: 5,
    height: 35,
    paddingLeft: 10,
  },
  separator: {
    borderWidth: 0.5,
    width: Dimensions.get('window').width / 1.2,
    height: 1,
    backgroundColor: 'white',
    color: 'red',
    borderColor: '#BDBDBD',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },

  addImageBody: {
    marginTop: 20,
  },

  uploadButtonContainer: {
    marginLeft: 30,
  },

  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    backgroundColor: '#0c5aa9',
    width: 80,
    height: 30,
    marginTop: 10,
    borderRadius: 3,
    elevation: 5,
  },

  imageContainer: {
    height: 300,
    width: screenWidth,
    backgroundColor: '#c4c4c4',
    opacity: .5,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nextBackButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  downloadIcon: {
    width: 20,
  },

})
