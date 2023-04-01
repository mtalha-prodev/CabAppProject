import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Voucher from '../../../components/Voucher';
import BackButton from '../../../components/BackButton';
import UserProfileHeader from '../../../components/UserProfileHeader';

const DriverTrips = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader title={'Trips'} />
      <ScrollView>
        <Voucher />
        <Voucher />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default DriverTrips;
