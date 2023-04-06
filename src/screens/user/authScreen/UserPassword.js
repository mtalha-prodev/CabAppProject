import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {userContent} from '../../ComanScreens/UserContent';
import BackButton from '../../../components/BackButton';

const UserPassword = () => {
  const navigation = useNavigation();

  const handlePassword = () => {
    try {
      navigation.navigate('UserDetails');
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.userIconColor} />
      <View style={{alignSelf: 'center', width: screenSize.wrapperWidth}}>
        <Text style={style.title}>{userContent.phonePass}</Text>
        <Text style={style.text}>{userContent.phonePassTxt}</Text>
        <View>
          <TextInput
            placeholder="Enter Password ..."
            style={style.inputText}
            placeholderTextColor={themeColor.txtColor}
          />
        </View>
        <View>
          <TouchableOpacity style={style.btn} onPress={() => handlePassword()}>
            <Text style={style.btnTxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  title: {
    fontSize: fontSize.title,
    marginTop: screenSize.titleTopMargin,
    color: themeColor.titleColor,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: fontSize.txt,
    marginBottom: screenSize.textMargin,
    alignSelf: 'flex-start',
    color: themeColor.txtColor,
  },
  inputText: {
    borderBottomWidth: 3,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.bgColor,
    marginVertical: screenSize.inputMarginVertical,
    color: themeColor.txtColor,
    padding: screenSize.inputPadding,
  },
  btn: {
    backgroundColor: themeColor.userBtnBgColor,
    width: screenSize.btnWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    marginTop: screenSize.btnTopMargin,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default UserPassword;
