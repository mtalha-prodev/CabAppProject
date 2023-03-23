import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../../constant';
import {driverContent} from '../../ComanScreens/DriverContent';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/BackButton';

const {width} = Dimensions.get('screen');
const DriverPassword = () => {
  const navigation = useNavigation();

  const handlePassword = () => {
    try {
      navigation.navigate('DriverDetails');
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <BackButton />
      <View style={{alignSelf: 'center'}}>
        <Text style={style.title}>{driverContent.phonePass}</Text>
        <Text style={style.text}>{driverContent.phonePassTxt}</Text>
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
    // alignItems: 'center',
    paddingVertical: 25,
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
    width: width - 30,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.bgColor,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: themeColor.btnBgColor,
    width: width - 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 40,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default DriverPassword;
