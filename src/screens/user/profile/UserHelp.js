import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Voucher from '../../../components/Voucher';
import {fontSize, themeColor} from '../../../constant';
import Helps from '../../../components/Helps';

const UserHelp = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader title="Help" />
      {/* Voucher */}
      <Helps />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default UserHelp;
