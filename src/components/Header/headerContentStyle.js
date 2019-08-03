import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerCont: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingLeft: 30,
  },
  circle: {
    borderRadius: 90,
    width: 60,
    height: 60,
    backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  stages: {
    alignSelf: 'center',
    top: 18,
    color: '#3446A9',
    fontSize: 18,
  },
  progressBarContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
  },
  progressBar: {
    height: 5,
    width: 190,
    backgroundColor: 'white',
  },
  headingTitleContainer: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
  },
  headingTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: "100",
  },
})
