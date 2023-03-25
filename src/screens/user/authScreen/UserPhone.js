import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
// import {fontSize, themeColor} from '../../constant';
import {useNavigation} from '@react-navigation/native';
import {userContent} from '../../ComanScreens/UserContent';
import {fontSize, themeColor} from '../../../constant';
import BackButton from '../../../components/BackButton';

const {width} = Dimensions.get('screen');

const UserPhone = () => {
  const [number, setNumber] = useState('');
  const navigation = useNavigation();

  // sed number and otp
  const handleNumber = async () => {
    try {
      navigation.navigate('UserOtp');
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <BackButton />
      <View style={{alignSelf: 'center', marginTop: 20, width: width - 40}}>
        <Text style={style.title}>{userContent.phoneTitle}</Text>
        <Text style={style.text}>{userContent.phoneTxt}</Text>
        <View>
          <TextInput
            value={number}
            onChangeText={val => setNumber(val)}
            placeholder="Enter Mobile Number ..."
            style={style.inputText}
            keyboardType={'number-pad'}
            placeholderTextColor={themeColor.txtColor}
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
    color: themeColor.txtColor,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  inputText: {
    borderBottomWidth: 3,
    marginVertical: 30,
    width: width - 50,
    fontSize: fontSize.txt,
    color: themeColor.txtColor,
    borderBottomColor: themeColor.bgColor,
  },
  btn: {
    backgroundColor: themeColor.btnBgColor,
    width: width - 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 60,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default UserPhone;
