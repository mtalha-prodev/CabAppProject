import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {fontSize, themeColor} from '../../../constant';
import {userContent} from '../../ComanScreens/UserContent';

const {width} = Dimensions.get('screen');
const UserPassword = () => {
  const navigation = useNavigation();

  const handlePassword = () => {
    try {
      navigation.navigate('UserDetails');
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>{userContent.phonePass}</Text>
      <Text style={style.text}>{userContent.phonePassTxt}</Text>
      <View>
        <TextInput
          placeholder="Enter Mobile Number ..."
          style={style.inputText}
        />
      </View>
      <View>
        <TouchableOpacity style={style.btn} onPress={() => handlePassword()}>
          <Text style={style.btnTxt}>Sign In</Text>
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

export default UserPassword;
