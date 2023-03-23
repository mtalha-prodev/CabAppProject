import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../constant';
import {useNavigation} from '@react-navigation/native';
import {userContent} from '../screens/ComanScreens/UserContent';

const {width} = Dimensions.get('screen');
const Welcome = ({title, text, login}) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View
        style={{
          flex: 2.2,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/img/userimg.png')}
          style={{width: width, height: 300}}
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
    alignItems: 'center',
    width: width - 50,
  },
  title: {
    fontSize: fontSize.title,
    color: themeColor.titleColor,
    marginVertical: 10,
  },
  text: {
    fontSize: fontSize.txt,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.btnBgColor,
    width: width - 60,
    padding: 10,
    borderRadius: 20,
    marginVertical: 20,
  },

  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default Welcome;
