import {View, Text} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Setting from '../../../components/Setting';

const DriverSetting = () => {
  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      <UserProfileHeader title={'Setting'} />
      <Setting />
    </View>
  );
};

export default DriverSetting;