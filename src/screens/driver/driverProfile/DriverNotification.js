import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import NotiComponent from '../../../components/NotiComponent';
import UserProfileHeader from '../../../components/UserProfileHeader';

const DriverNotification = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader title={'Notification'} />
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
    paddingVertical: 20,
  },
});

export default DriverNotification;
