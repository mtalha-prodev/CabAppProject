import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  MapDirections,
  SearchLocation,
  UserDetails,
  UserLogin,
  UserMainScreen,
  UserPassword,
  UserPhone,
  UserWelcome,
} from '../screens/userScreens';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import UserOtp from '../screens/user/UserOtp';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
