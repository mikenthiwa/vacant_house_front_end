import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    opacity: 1,
  },
  activeSideBar: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 0,
    top: 0,
  },
  appSideBar: {
    zIndex: 1000
  },
  inactiveSideBar: {
    display: 'none',
  },
  hamburger: {
    left: 20,
    top: 20,
  },
  searchContainer: {
    top: 200
  }
})
