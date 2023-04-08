import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Voucher from '../../../components/Voucher';
import {fontSize, screenSize, themeColor} from '../../../constant';
import Helps from '../../../components/Helps';

const UserHelp = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader iconColor={themeColor.userIconColor} title="Help" />
      <ScrollView style={{marginVertical: 10}}>
        {/* Voucher */}
        <Helps borderColor={themeColor.userBorderColor} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: screenSize.containerPaddingVertical,
  },
});

export default UserHelp;
