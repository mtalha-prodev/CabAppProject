import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Welcome from '../../components/Welcome';
import {driverContent} from '../ComanScreens/DriverContent';

const DriverWelcome = () => {
  return (
    <View style={style.container}>
      <Welcome title={driverContent.welcomeTitle} login="DriverPhone" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default DriverWelcome;
