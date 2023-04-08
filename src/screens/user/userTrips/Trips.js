import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Voucher from '../../../components/Voucher';
import {themeColor} from '../../../constant';

const Trips = () => {
  return (
    <View style={style.container}>
      {/* user profile header */}
      <UserProfileHeader iconColor={themeColor.userIconColor} title="Trips" />
      {/* voucher  */}
      <ScrollView style={style.scrollStyle}>
        <Voucher borderColor={themeColor.userBorderColor} />
        <Voucher borderColor={themeColor.userBorderColor} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  scrollStyle: {
    // marginVertical: 10,
  },
});

export default Trips;
