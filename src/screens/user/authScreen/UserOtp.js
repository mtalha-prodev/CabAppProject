import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../../constant';
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
    paddingTop: 50,
  },
  title: {
    fontSize: fontSize.title,
    marginVertical: 20,
    color: themeColor.titleColor,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  text: {
    fontSize: fontSize.txt,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: themeColor.txtColor,
  },
  inputText: {
    borderBottomWidth: 3,
    marginTop: 30,
    width: width - 50,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.bgColor,
    marginBottom: 10,
    color: themeColor.txtColor,
  },
  btn: {
    backgroundColor: themeColor.btnBgColor,
    width: width - 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 80,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default UserOtp;
