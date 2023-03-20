import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ChatScreen,
  ConfirmRaide,
  MapDirections,
  SearchLocation,
  UserDetails,
  UserLogin,
  UserMainScreen,
  UserPassword,
  UserPhone,
  UserWelcome,
  UserProfile,
  UserOtp,
  EditAccount,
  Wallet,
  PaymentMethod,
  PaymentDetails,
  PaymentEdit,
  Trips,
  TripDetails,
  UserNotification,
  UserSetting,
  UserHelp,
  UserContact,
  RateUs,
  ShareApp,
} from '../screens/ComanScreens/userScreens';
import Splash from '../screens/ComanScreens/Splash';
import Home from '../screens/ComanScreens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        {/* user Screens start */}
        <Stack.Screen
          name="UserWelcome"
          component={UserWelcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserLogin"
          component={UserLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserPhone"
          component={UserPhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserOtp"
          component={UserOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserPassword"
          component={UserPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserMainScreen"
          component={UserMainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchLocation"
          component={SearchLocation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MapDirections"
          component={MapDirections}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmRaide"
          component={ConfirmRaide}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false}}
        />
        {/* user Profile */}
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserEditAccount"
          component={EditAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserWallet"
          component={Wallet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentDetails"
          component={PaymentDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentEdit"
          component={PaymentEdit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserTrips"
          component={Trips}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserTripsDetail"
          component={TripDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserNotification"
          component={UserNotification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserSetting"
          component={UserSetting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserHelp"
          component={UserHelp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserContact"
          component={UserContact}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RateUs"
          component={RateUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SheraApp"
          component={ShareApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
