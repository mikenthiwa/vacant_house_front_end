import React from'react';
import { createAppContainer, createDrawerNavigator} from 'react-navigation';
import {Dimensions} from 'react-native'
import HomeScreen from '../Screens';
import ApartmentScreen from '../View/AddApartment'
import SideBar from '../View/SideBar';
import AddImageScreen from '../View/AddApartment/addImage'

const width = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: width*0.83,
  overlayColor: 1,
  contentComponent: ({navigation}) => <SideBar {...navigation} />
};

const routes = createDrawerNavigator(
  {
    Home: HomeScreen,
    AddApartment: ApartmentScreen,
    AddImage: AddImageScreen,
  },
  DrawerConfig
);

export default createAppContainer(routes)
