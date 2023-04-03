import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {useNavigation} from '@react-navigation/native';
import {userContent} from '../../ComanScreens/UserContent';
import BackButton from '../../../components/BackButton';

const {width} = Dimensions.get('screen');
const UserOtp = () => {
  const navigation = useNavigation();

  const handleOtp = () => {
    try {
      navigation.navigate('UserPassword');
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <BackButton />
      <View style={{alignSelf: 'center'}}>
        <Text style={style.title}>{userContent.phoneOtpTitle}</Text>
        <Text style={style.text}>{userContent.phoneOtpTxt}</Text>
        <View>
          <TextInput
            placeholder="Enter OTP Code ..."
            style={style.inputText}
            keyboardType={'number-pad'}
            placeholderTextColor={themeColor.txtColor}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, color: themeColor.txtColor}}>
              Please don't share your code{' '}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '800',
                color: themeColor.txtColor,
              }}>
              {'00:30'}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={style.btn} onPress={() => handleOtp()}>
            <Text style={style.btnTxt}>Next</Text>
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
    marginVertical: 10,
    color: themeColor.titleColor,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: fontSize.txt,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: themeColor.txtColor,
  },
  inputText: {
    borderBottomWidth: 3,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.bgColor,
    color: themeColor.txtColor,
    padding: screenSize.inputPadding,
    marginVertical: screenSize.inputMarginVertical,
  },
  btn: {
    backgroundColor: themeColor.userBtnBgColor,
    width: screenSize.inputWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    marginTop: 60,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default UserOtp;
