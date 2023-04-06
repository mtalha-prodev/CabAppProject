import {View, StyleSheet} from 'react-native';
import React from 'react';
import Welcome from '../../components/Welcome';

import {themeColor} from '../../constant';
import {userContent} from '../ComanScreens/UserContent';

const UserWelcome = () => {
  return (
    <View style={style.container}>
      {/* welcome component */}
      <Welcome
        title={userContent.welcomeTitle}
        text={userContent.welcomeTxt}
        login="UserLogin"
        btnColor={themeColor.userBtnBgColor}
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
