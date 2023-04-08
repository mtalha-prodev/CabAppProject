import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import NotiComponent from '../../../components/NotiComponent';
import UserProfileHeader from '../../../components/UserProfileHeader';
import {screenSize, themeColor} from '../../../constant';

const DriverNotification = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader
        iconColor={themeColor.driverIconColor}
        title={'Notification'}
      />
      <ScrollView>
        <NotiComponent title="Want our Exciting Features" msg="" />
        <NotiComponent title="Want our Exciting Features" msg="" />
        <NotiComponent title="Want our Exciting Features" msg="" />
        <NotiComponent title="Want our Exciting Features" msg="" />
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

export default DriverNotification;
