import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../../constant';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Setting from '../../../components/Setting';

const UserSetting = () => {
  return (
    <View style={style.container}>
      {/* header */}
      <UserProfileHeader title="Setting" />
      {/* profile pic  */}
      <Setting />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default UserSetting;
