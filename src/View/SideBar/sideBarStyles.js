import {StyleSheet} from 'react-native';
import { Platform } from 'react-native'

export default StyleSheet.create({
  sideBar: {
    flex: 1,
    flexDirection: 'column'
  },
  profileContainer: {
    height: 160,
    backgroundColor: '#2f6ba9',
    marginBottom: 10,
    position: 'relative',
  },
  Profile: {
    position: 'absolute',
    borderRadius: 90/2,
    width: 90,
    height: 90,
    backgroundColor: 'white',
    top: 30,
    alignSelf: 'center',
    color: 'red',
    borderColor: '#BDBDBD',
    borderWidth: 3,
    zIndex: 100,
    elevation: (Platform.OS === 'android') ? 1000: 0,
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  menuItemsContainer: {
    borderBottomColor: '#EBEAEA',
    borderBottomWidth: 1,
    paddingLeft: 15,
    height: 45,
    position: 'relative'

  },
  menuItems: {
    color: '#3a3a3a',
    fontSize: 17,
    fontWeight: "600",
    fontFamily: 'oxygen',
    alignItems: 'center',
  },

})
