import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Welcome from '../../components/Welcome';

import {themeColor, fontSize} from '../../constant';
import {StackActions, useNavigation} from '@react-navigation/native';
import {userContent} from '../ComanScreens/UserContent';

const {width} = Dimensions.get('screen');
const UserWelcome = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View
        style={{
          flex: 2,
        }}>
        {/* welcome component */}
        <Welcome
          title={userContent.welcomeTitle}
          text={userContent.welcomeTxt}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={style.btn}
          onPress={() =>
            navigation.dispatch(StackActions.replace('UserLogin'))
          }>
          <Text style={style.btnTxt}>{userContent.welcomeBtn}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.replace('Home'))}>
          <Text style={{color: themeColor.bgColorTwo, fontSize: fontSize.txt}}>
            {userContent.welcomeOption}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
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

export default UserWelcome;
