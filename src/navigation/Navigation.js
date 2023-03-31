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
import {
  BackCnic,
  DriverApproval,
  DriverDetails,
  DriverMapOne,
  DriverOtp,
  DriverPassword,
  DriverPhone,
  DriverPhoto,
  DriverWelcome,
  FrontCnic,
  LicenseBackSide,
  LicenseFrontSide,
  RaidoChoose,
  RequireSteps,
  SetAll,
  TermCondition,
  VehicleDocuments,
} from './driverScreens';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        {/* user Screens start */}
        <Stack.Screen name="UserWelcome" component={UserWelcome} />
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="UserPhone" component={UserPhone} />
        <Stack.Screen name="UserOtp" component={UserOtp} />
        <Stack.Screen name="UserPassword" component={UserPassword} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="UserMainScreen" component={UserMainScreen} />
        <Stack.Screen name="SearchLocation" component={SearchLocation} />
        <Stack.Screen name="MapDirections" component={MapDirections} />
        <Stack.Screen name="ConfirmRaide" component={ConfirmRaide} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        {/* user Profile */}
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="UserEditAccount" component={EditAccount} />
        <Stack.Screen name="UserWallet" component={Wallet} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="PaymentEdit" component={PaymentEdit} />
        <Stack.Screen name="UserTrips" component={Trips} />
        <Stack.Screen name="UserTripsDetail" component={TripDetails} />
        <Stack.Screen name="UserNotification" component={UserNotification} />
        <Stack.Screen name="UserSetting" component={UserSetting} />
        <Stack.Screen name="UserHelp" component={UserHelp} />
        <Stack.Screen name="UserContact" component={UserContact} />
        <Stack.Screen name="RateUs" component={RateUs} />
        <Stack.Screen name="SheraApp" component={ShareApp} />

        {/* driver navigation screens */}
        <Stack.Screen name="DriverWelcome" component={DriverWelcome} />
        {/* driver auth details */}
        <Stack.Screen name="DriverPhone" component={DriverPhone} />
        <Stack.Screen name="DriverOtp" component={DriverOtp} />
        <Stack.Screen name="DriverPassword" component={DriverPassword} />
        <Stack.Screen name="DriverDetails" component={DriverDetails} />
        <Stack.Screen name="DriverTerms" component={TermCondition} />
        <Stack.Screen name="SetAll" component={SetAll} />
        <Stack.Screen name="RaidoChoose" component={RaidoChoose} />
        {/* driver decuments */}
        <Stack.Screen name="DriverRequired" component={RequireSteps} />
        <Stack.Screen name="FrontCnic" component={FrontCnic} />
        <Stack.Screen name="BackCnic" component={BackCnic} />
        <Stack.Screen name="DriverPhoto" component={DriverPhoto} />
        <Stack.Screen name="LicenseFront" component={LicenseFrontSide} />
        <Stack.Screen name="LicenseBack" component={LicenseBackSide} />
        <Stack.Screen name="VehicleBook" component={VehicleDocuments} />
        <Stack.Screen name="DriverApproval" component={DriverApproval} />
        <Stack.Screen name="DriverProfile" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
