import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Setting from '../../../components/Setting';
import {screenSize, themeColor} from '../../../constant';

const DriverSetting = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader
        iconColor={themeColor.driverIconColor}
        title={'Setting'}
      />
      <ScrollView>
        <Setting iconColor={themeColor.driverIconColor} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, paddingVertical: screenSize.containerPaddingVertical},
});

export default DriverSetting;
