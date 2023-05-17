import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {driverContent} from '../../ComanScreens/DriverContent';
import {fontSize, screenSize, themeColor} from '../../../constant';
import BackButton from '../../../components/BackButton';
import PhoneInput from 'react-native-phone-number-input';

const DriverPhone = () => {
  const [number, setNumber] = useState('');

  const navigation = useNavigation();

  // send number for otp
  const handleNumber = async () => {
    try {
      if (number.length <= 9) {
        Alert.alert('Alert Phone', 'Please Add an Correct Number!');
      } else {
        Alert.alert(number);
        navigation.navigate('DriverOtp');
      }
    } catch (error) {
      console.log(error);
    }

    Alert.alert(number, formattedValue);
    navigation.navigate('DriverOtp');
  };

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverBtnBgColor} />
      <View style={{alignSelf: 'center'}}>
        <Text style={style.title}>{driverContent.phoneTitle}</Text>
        <Text style={style.text}>{driverContent.phoneTxt}</Text>
        {/* phone number */}

        <View>
          <PhoneInput
            defaultValue={number}
            defaultCode="PK"
            layout="first"
            // autoFocus
            onChangeFormattedText={text => {
              setNumber(text);
            }}
            containerStyle={{
              borderBottomWidth: 2,
              borderBottomColor: themeColor.driverBorderColor,
              width: screenSize.inputWidth,
              backgroundColor: themeColor.driverBorderColor,
              height: 60,
              marginTop: 10,
            }}
            textContainerStyle={{paddingVertical: 0}}
          />
        </View>
        <View>
          <TouchableOpacity style={style.btn} onPress={() => handleNumber()}>
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
    marginVertical: screenSize.inputMarginVertical,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.driverBorderColor,
    color: themeColor.txtColor,
  },
  btn: {
    backgroundColor: themeColor.driverBtnBgColor,
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

export default DriverPhone;
