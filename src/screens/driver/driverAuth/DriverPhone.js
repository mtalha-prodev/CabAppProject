import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {driverContent} from '../../ComanScreens/DriverContent';
import {fontSize, themeColor} from '../../../constant';
import BackButton from '../../../components/BackButton';

const {width} = Dimensions.get('screen');

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
      <BackButton />
      <View style={{alignSelf: 'center'}}>
        <Text style={style.title}>{driverContent.phoneTitle}</Text>
        <Text style={style.text}>{driverContent.phoneTxt}</Text>
        <View>
          <TextInput
            value={number}
            onChangeText={val => setNumber(val)}
            placeholder="Enter Mobile Number ..."
            style={style.inputText}
            placeholderTextColor={themeColor.txtColor}
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
    marginVertical: 30,
    width: width - 40,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.bgColor,
  },
  btn: {
    backgroundColor: themeColor.btnBgColor,
    width: width - 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default DriverPhone;
