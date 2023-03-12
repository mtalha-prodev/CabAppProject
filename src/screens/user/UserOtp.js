import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {userContent} from '../UserContent';
import {fontSize, themeColor} from '../../constant';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');
const UserOtp = () => {
  const navigation = useNavigation();

  const handleOtp = () => {
    try {
      navigation.navigate('UserPassword');
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>{userContent.phoneOtpTitle}</Text>
      <Text style={style.text}>{userContent.phoneOtpTxt}</Text>
      <View>
        <TextInput
          placeholder="Enter Mobile Number ..."
          style={style.inputText}
          keyboardType={'number-pad'}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16}}>Please don't share your code </Text>
          <Text style={{fontSize: 16, fontWeight: '800'}}>{'00:30'}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={style.btn} onPress={() => handleOtp()}>
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

export default UserOtp;
