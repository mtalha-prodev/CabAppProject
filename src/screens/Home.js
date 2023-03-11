import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {themeColor} from './../constant';

const Home = () => {
  const {
    bgColor,
    bgColorOne,
    bgColorTwo,
    btnBgColor,
    btnBgColorTwo,
    txtColor,
    btnTxtColor,
  } = themeColor;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={bgColor} barStyle={'dark-content'} />
      <TouchableOpacity style={{backgroundColor: btnBgColor, width: '100%'}}>
        <Text>Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: btnBgColorTwo, width: '100%'}}>
        <Text>Driver</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: bgColorOne, width: '100%'}}>
        <Text>Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: bgColorTwo, width: '100%'}}>
        <Text>Driver</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
