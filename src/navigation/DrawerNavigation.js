import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DriverEarning,
  DriverHelp,
  DriverNotification,
  DriverProfile,
  DriverSetting,
  DriverTrips,
  DriverWallet,
} from './driverScreens';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Profile" component={DriverProfile} />
      <Drawer.Screen name="Earning" component={DriverEarning} />
      <Drawer.Screen name="Trips" component={DriverTrips} />
      <Drawer.Screen name="Help" component={DriverHelp} />
      <Drawer.Screen name="Setting" component={DriverSetting} />
      <Drawer.Screen name="Wallet" component={DriverWallet} />
      <Drawer.Screen name="Notification" component={DriverNotification} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
