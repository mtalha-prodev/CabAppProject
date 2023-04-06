import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {driverContent} from '../../ComanScreens/DriverContent';
import {StackActions, useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/BackButton';

const DriverDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  const handleDetails = () => {
    try {
      navigation.navigate('SetAll');
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverIconColor} />
      <ScrollView>
        <View style={style.wrapper}>
          <Text style={style.title}>{driverContent.detailTitle}</Text>
          <Text style={style.text}>{driverContent.detailTxt}</Text>
          <View style={style.inputForm}>
            <Text style={style.label}>User Name</Text>
            <TextInput
              value={name}
              onChangeText={val => setName(val)}
              placeholder="Enter Name ..."
              style={style.inputText}
              placeholderTextColor={themeColor.txtColor}
            />
          </View>
          <View style={style.inputForm}>
            <Text style={style.label}>Confirm E-mail</Text>
            <TextInput
              value={email}
              onChangeText={val => setEmail(val)}
              placeholder="Enter E-mail ..."
              style={style.inputText}
              placeholderTextColor={themeColor.txtColor}
            />
          </View>
          <View style={style.inputForm}>
            <Text style={style.label}>Password</Text>
            <TextInput
              value={password}
              onChangeText={val => setPassword(val)}
              placeholder="Enter Password ..."
              style={style.inputText}
              placeholderTextColor={themeColor.txtColor}
            />
          </View>
          <View style={style.inputForm}>
            <Text style={style.label}>Referral Code</Text>
            <TextInput
              value={referralCode}
              onChangeText={val => setReferralCode(val)}
              placeholder="Enter Your referral code ..."
              placeholderTextColor={themeColor.txtColor}
              style={style.inputText}
            />
          </View>
          <View style={style.inputForm}>
            <Text style={style.label}>Your City</Text>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Enter your City ..."
              placeholderTextColor={themeColor.txtColor}
              style={style.inputText}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={style.btn} onPress={() => handleDetails()}>
            <Text style={style.btnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  wrapper: {
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
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
  inputForm: {
    marginBottom: 10,
  },
  inputText: {
    borderBottomWidth: 2,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.driverBorderColor,
  },
  btn: {
    backgroundColor: themeColor.driverBtnBgColor,
    width: screenSize.btnWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    marginTop: screenSize.btnTopMargin,
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
  label: {
    fontSize: fontSize.btnTxt,
    color: themeColor.titleColor,
    fontWeight: 'bold',
  },
});

export default DriverDetails;
