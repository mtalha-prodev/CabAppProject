import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {driverContent} from '../../ComanScreens/DriverContent';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/BackButton';

const DriverOtp = () => {
  const [times, setTimes] = useState(30);

  const navigation = useNavigation();

  const handleOtp = () => {
    try {
      navigation.navigate('DriverPassword');
    } catch (error) {}
  };

  // setInterval(() => {
  //   setTimes(times);
  // }, 1000);

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
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, color: themeColor.inputTextColor}}>
              Please don't share your code
            </Text>
            <Text style={{fontSize: 16, fontWeight: '800'}}>00:{times}</Text>
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
