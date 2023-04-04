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
import {fontSize, screenSize, themeColor} from '../../../constant';
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
      <View>
        <BackButton />
        <View style={{width: screenSize.wrapperWidth, alignSelf: 'center'}}>
          <Text style={style.title}>{userContent.detailTitle}</Text>
          <Text style={style.text}>{userContent.detailTxt}</Text>
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
            <Text style={style.label}>Confirm Password</Text>
            <TextInput
              value={confirmPass}
              onChangeText={val => setConfirmPass(val)}
              placeholder="Enter Password ..."
              style={style.inputText}
              placeholderTextColor={themeColor.txtColor}
            />
          </View>
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
    paddingVertical: screenSize.containerPaddingVertical,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fontSize.title,
    marginVertical: 10,
    color: themeColor.titleColor,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: fontSize.txt,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: themeColor.txtColor,
  },
  inputForm: {
    marginVertical: screenSize.inputMarginVertical,
  },
  label: {
    fontSize: fontSize.btnTxt,
    color: themeColor.titleColor,
    fontWeight: 'bold',
  },
  inputText: {
    borderBottomWidth: 2,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.userBtnBgColor,
    color: themeColor.txtColor,
    padding: screenSize.inputPadding,
  },
  btn: {
    backgroundColor: themeColor.userBtnBgColor,
    width: screenSize.btnWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    // marginTop: 80,
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default UserDetails;
