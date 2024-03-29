import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Welcome from '../../../components/Welcome';
import {useNavigation} from '@react-navigation/native';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {userContent} from '../../ComanScreens/UserContent';

const UserLogin = () => {
  const googleLogin = () => {
    try {
      console.log('Login With Google !');
    } catch (error) {}
  };
  const facebookLogin = () => {
    try {
      console.log('Login With facebook !');
    } catch (error) {}
  };

  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={{flex: 2}}>
        <Welcome title={userContent.loginTitle} text={userContent.loginTxt} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserPhone')}
          style={style.btn}>
          <Text style={style.btnTxt}>Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => facebookLogin()}
          style={[style.btn, {backgroundColor: themeColor.bgColorOne}]}>
          <Text style={style.btnTxt}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => googleLogin()}
          style={[style.btn, {backgroundColor: themeColor.driverBtnBgColor}]}>
          <Text style={style.btnTxt}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    padding: screenSize.btnPadding,
    backgroundColor: themeColor.userBtnBgColor,
    width: screenSize.btnWidth,
    alignItems: 'center',
    borderRadius: screenSize.btnRadius,
    marginVertical: screenSize.btnMarginVertical,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    color: themeColor.btnTxtColor,
    fontWeight: fontSize.bold,
  },
});

export default UserLogin;
