import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Voucher from '../../../components/Voucher';
import UserProfileHeader from '../../../components/UserProfileHeader';
import {screenSize, themeColor} from '../../../constant';

const DriverTrips = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader
        iconColor={themeColor.driverIconColor}
        title={'Trips'}
      />
      <ScrollView>
        <Voucher borderColor={themeColor.driverBorderColor} />
        <Voucher borderColor={themeColor.driverBorderColor} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
});

export default DriverTrips;
