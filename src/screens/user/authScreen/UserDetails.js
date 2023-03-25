import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {userContent} from '../../ComanScreens/UserContent';
import {fontSize, themeColor} from '../../../constant';
import BackButton from '../../../components/BackButton';

const {width} = Dimensions.get('screen');
const UserDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const navigation = useNavigation();

  const handleDetails = () => {
    try {
      navigation.dispatch(StackActions.replace('UserMainScreen'));
    } catch (error) {}
  };

  return (
    <View style={style.container}>
      <BackButton />
      <View style={{width: width - 30, alignSelf: 'center'}}>
        <Text style={style.title}>{userContent.detailTitle}</Text>
        <Text style={style.text}>{userContent.detailTxt}</Text>
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
            Confirm Password
          </Text>
          <TextInput
            value={confirmPass}
            onChangeText={val => setConfirmPass(val)}
            placeholder="Enter Password ..."
            style={style.inputText}
            placeholderTextColor={themeColor.txtColor}
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
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingVertical: 20,
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
    width: width - 30,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.btnBgColorTwo,
    color: themeColor.txtColor,
  },
  btn: {
    backgroundColor: themeColor.btnBgColor,
    width: width - 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 80,
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default UserDetails;
