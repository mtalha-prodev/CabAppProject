import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {driverContent} from '../../ComanScreens/DriverContent';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/BackButton';
import CountDown from 'react-native-countdown-component';

const DriverOtp = () => {
  const [otp, setOtp] = useState('');

  const navigation = useNavigation();

  const handleOtp = () => {
    try {
      if (otp.length < 4) {
        Alert.alert('OTP', 'Please Enter Varification Code!');
      } else {
        navigation.navigate('DriverPassword');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverIconColor} />
      <View style={{alignSelf: 'center'}}>
        <Text style={style.title}>{driverContent.phoneOtpTitle}</Text>
        <Text style={style.text}>{driverContent.phoneOtpTxt}</Text>
        <View>
          <TextInput
            placeholder="Enter Mobile Number ..."
            style={style.inputText}
            keyboardType={'number-pad'}
            placeholderTextColor={themeColor.txtColor}
            value={otp}
            onChangeText={text => setOtp(text)}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 16,
                color: themeColor.inputTextColor,
                marginTop: 10,
                marginLeft: 10,
              }}>
              Please don't share your code
            </Text>

            <View>
              <CountDown
                until={30}
                size={16}
                onFinish={() => alert('Resend otp code!')}
                digitStyle={{
                  backgroundColor: 'transparent',
                  padding: 0,
                  margin: 0,
                }}
                digitTxtStyle={{color: themeColor.titleColor, margin: 0}}
                timeToShow={['M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
              />
            </View>
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
    marginTop: screenSize.inputMarginVertical,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.driverBorderColor,
    color: themeColor.txtColor,
  },
  btn: {
    backgroundColor: themeColor.driverBtnBgColor,
    width: screenSize.inputWidth,
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

export default DriverOtp;
