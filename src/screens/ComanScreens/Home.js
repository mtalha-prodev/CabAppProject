import {Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StackActions, useNavigation} from '@react-navigation/native';
import {themeColor} from '../../constant';

const {bgColor, bgColorOne, btnBgColor, btnBgColorTwo, btnTxtColor} =
  themeColor;

const Home = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[bgColorOne, bgColor]}
      locations={[0.3, 1]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={style.container}>
      <StatusBar backgroundColor={bgColorOne} barStyle={'defualt'} />
      <TouchableOpacity
        style={[
          style.btn,
          {backgroundColor: btnBgColorTwo, borderColor: btnBgColor},
        ]}
        onPress={() => navigation.navigate('DriverWelcome')}>
        <Text style={[{color: btnTxtColor}, style.btnTxt]}>Driver</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {backgroundColor: btnBgColor, borderColor: btnBgColorTwo},
          style.btn,
        ]}
        onPress={() => navigation.navigate('UserWelcome')}>
        <Text style={[{color: btnTxtColor}, style.btnTxt]}>Users</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 30,
    marginVertical: 15,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
