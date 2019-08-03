import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container: {
    // flex: 1,
    // justifyContent: 'center',
  },
  SearchContainer: {
    alignSelf: 'center',
  },
  Search: {
    top: 35,
    left: 10,
  },
  Input: {
    borderColor: "#cecece",
    borderWidth: 1,
    width: 306,
    borderRadius: 30,
    paddingLeft: 40,
    height: 45,
  },
  RoomLabel: {
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 19,
    fontFamily: 'Oxygen',
    marginBottom: 10,
    marginTop: 10,

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
  },
  RoomType: {
    fontWeight: 'normal',
    fontSize: 15
  },
  CheckBox: {
    borderRadius: 6,
  },
})
