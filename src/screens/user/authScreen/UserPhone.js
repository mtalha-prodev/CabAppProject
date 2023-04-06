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
import {fontSize, screenSize, themeColor} from '../../../constant';
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
      <BackButton iconColor={themeColor.userIconColor} />
      <View style={style.wrapper}>
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
    paddingVertical: screenSize.containerPaddingVertical,
  },
  title: {
    fontSize: fontSize.title,
    marginTop: screenSize.titleTopMargin,
    color: themeColor.titleColor,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: fontSize.txt,
    color: themeColor.txtColor,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  inputText: {
    borderBottomWidth: 3,
    marginVertical: screenSize.inputMarginVertical,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    color: themeColor.txtColor,
    borderBottomColor: themeColor.bgColor,
  },
  btn: {
    backgroundColor: themeColor.userBtnBgColor,
    width: screenSize.btnWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    marginTop: screenSize.btnTopMargin,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
  wrapper: {
    alignSelf: 'center',
    width: screenSize.wrapperWidth,
  },
});

export default UserPhone;
