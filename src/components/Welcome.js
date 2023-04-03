import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../constant';
import {useNavigation} from '@react-navigation/native';
import {userContent} from '../screens/ComanScreens/UserContent';
import BackButton from './BackButton';

const {width} = Dimensions.get('screen');
const Welcome = ({title, text, login}) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <StatusBar
        backgroundColor={themeColor.bgCard}
        barStyle={'dark-content'}
      />
      {/* <View style={{marginVertical: 10}}>
        <BackButton />
      </View> */}
      <View
        style={{
          flex: 3,
          // justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/img/userimg.png')}
          style={style.img}
        />
        <View>
          <Text style={style.title}>{title}</Text>
          <Text style={style.text}>{text}</Text>
        </View>
      </View>
      {login && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={style.btn}
            onPress={() => navigation.navigate(login)}>
            <Text style={style.btnTxt}>{userContent.welcomeBtn}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text
              style={{color: themeColor.bgColorTwo, fontSize: fontSize.txt}}>
              {userContent.welcomeOption}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: screenSize.wrapperWidth,
  },

  img: {
    width: width,
    height: 300,
    borderBottomRightRadius: screenSize.imgRadius,
    borderBottomLeftRadius: screenSize.imgRadius,
  },
  title: {
    fontSize: fontSize.title,
    color: themeColor.titleColor,
    marginTop: screenSize.topMargin,
    marginVertical: 6,
  },
  text: {
    fontSize: fontSize.txt,
    color: themeColor.txtColor,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.userBtnBgColor,
    width: screenSize.btnWidth,
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    marginVertical: screenSize.btnMarginVertical,
  },

  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default Welcome;
