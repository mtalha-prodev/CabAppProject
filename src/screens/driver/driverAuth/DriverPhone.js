import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {driverContent} from '../../ComanScreens/DriverContent';
import {fontSize, screenSize, themeColor} from '../../../constant';
import BackButton from '../../../components/BackButton';

const DriverPhone = () => {
  const [number, setNumber] = useState('');
  const navigation = useNavigation();

  // sed number and otp
  const handleNumber = async () => {
    try {
      navigation.navigate('DriverOtp');
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverBtnBgColor} />
      <View style={{alignSelf: 'center'}}>
        <Text style={style.title}>{driverContent.phoneTitle}</Text>
        <Text style={style.text}>{driverContent.phoneTxt}</Text>
        <View>
          <TextInput
            value={number}
            onChangeText={val => setNumber(val)}
            placeholder="Enter Mobile Number ..."
            style={style.inputText}
            placeholderTextColor={themeColor.inputTextColor}
            keyboardType={'number-pad'}
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
