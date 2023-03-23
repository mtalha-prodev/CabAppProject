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

const UserWelcome = () => {
  return (
    <View style={style.container}>
      {/* welcome component */}
      <Welcome
        title={userContent.welcomeTitle}
        text={userContent.welcomeTxt}
        login="UserLogin"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default UserWelcome;
