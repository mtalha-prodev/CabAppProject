import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {fontSize, themeColor} from '../../constant';
import {userContent} from '../UserContent';
import {useNavigation} from '@react-navigation/native';

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
      <Text style={style.title}>{userContent.phoneTitle}</Text>
      <Text style={style.text}>{userContent.phoneTxt}</Text>
      <View>
        <TextInput
          value={number}
          onChangeText={val => setNumber(val)}
          placeholder="Enter Mobile Number ..."
          style={style.inputText}
          keyboardType={'number-pad'}
        />
      </View>
      <View>
        <TouchableOpacity style={style.btn} onPress={() => handleNumber()}>
          <Text style={style.btnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  inputText: {
    borderBottomWidth: 3,
    marginVertical: 30,
    width: width - 30,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.bgColor,
  },
  btn: {
    backgroundColor: themeColor.btnBgColor,
    width: width - 30,
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

export default UserPhone;
