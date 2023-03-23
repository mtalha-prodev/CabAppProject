import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {fontSize, themeColor} from '../../../constant';
import {driverContent} from '../../ComanScreens/DriverContent';
import {StackActions, useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/BackButton';

const {width} = Dimensions.get('screen');
const DriverDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  const handleDetails = () => {
    try {
      navigation.dispatch(StackActions.replace('DriverTerms'));
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <BackButton />
      <View style={{width: width - 40, alignSelf: 'center'}}>
        <Text style={style.title}>{driverContent.detailTitle}</Text>
        <Text style={style.text}>{driverContent.detailTxt}</Text>
        <View style={style.inputForm}>
          <Text
            style={{
              fontSize: 18,
              color: themeColor.btnBgColorTwo,
              fontWeight: 'bold',
            }}>
            User Name
          </Text>
          <TextInput
            value={name}
            onChangeText={val => setName(val)}
            placeholder="Enter Name ..."
            style={style.inputText}
            placeholderTextColor={themeColor.txtColor}
          />
        </View>
        <View style={style.inputForm}>
          <Text
            style={{
              fontSize: 18,
              color: themeColor.btnBgColorTwo,
              fontWeight: 'bold',
            }}>
            Confirm E-mail
          </Text>
          <TextInput
            value={email}
            onChangeText={val => setEmail(val)}
            placeholder="Enter E-mail ..."
            style={style.inputText}
            placeholderTextColor={themeColor.txtColor}
          />
        </View>
        <View style={style.inputForm}>
          <Text
            style={{
              fontSize: 18,
              color: themeColor.btnBgColorTwo,
              fontWeight: 'bold',
            }}>
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={val => setPassword(val)}
            placeholder="Enter Password ..."
            style={style.inputText}
            placeholderTextColor={themeColor.txtColor}
          />
        </View>
        <View style={style.inputForm}>
          <Text
            style={{
              fontSize: 18,
              color: themeColor.btnBgColorTwo,
              fontWeight: 'bold',
            }}>
            Referral Code
          </Text>
          <TextInput
            value={referralCode}
            onChangeText={val => setReferralCode(val)}
            placeholder="Enter Your referral code ..."
            placeholderTextColor={themeColor.txtColor}
            style={style.inputText}
          />
        </View>
        <View style={style.inputForm}>
          <Text
            style={{
              fontSize: 18,
              color: themeColor.btnBgColorTwo,
              fontWeight: 'bold',
            }}>
            Your City
          </Text>
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
  },
  text: {
    fontSize: fontSize.txt,
    marginBottom: 30,
    alignSelf: 'flex-start',
    color: themeColor.txtColor,
  },
  inputForm: {
    marginBottom: 10,
  },
  inputText: {
    borderBottomWidth: 2,
    width: width - 40,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.btnBgColorTwo,
  },
  btn: {
    backgroundColor: themeColor.btnBgColor,
    width: width - 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 40,
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default DriverDetails;
