import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {driverContent} from '../../ComanScreens/DriverContent';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/BackButton';

const DriverPassword = () => {
  const navigation = useNavigation();

  const handlePassword = () => {
    try {
      navigation.navigate('DriverDetails');
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverIconColor} />
      <View style={{alignSelf: 'center'}}>
        <Text style={style.title}>{driverContent.phonePass}</Text>
        <Text style={style.text}>{driverContent.phonePassTxt}</Text>
        <View>
          <TextInput
            placeholder="Enter Password ..."
            style={style.inputText}
            placeholderTextColor={themeColor.inputTextColor}
            secureTextEntry={true}
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
    marginVertical: screenSize.inputMarginVertical,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.driverIconColor,
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

export default DriverPassword;
