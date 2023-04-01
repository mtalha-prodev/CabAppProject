import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Helps from '../../../components/Helps';

const DriverHelp = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader title={'Help'} />
      <ScrollView>
        <Helps />
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

export default DriverHelp;
