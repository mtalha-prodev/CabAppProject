import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import NotiComponent from '../../../components/NotiComponent';

const UserNotification = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader title="Notification" />
      {/* notification */}
      <ScrollView style={style.scrollStyle}>
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
  scrollStyle: {
    marginVertical: 10,
  },
});

export default UserNotification;
