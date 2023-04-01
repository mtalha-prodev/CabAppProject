import {View} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import AppShere from '../../../components/AppShere';

const ShareApp = () => {
  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      {/* user profile header  */}
      <UserProfileHeader title="Invite Friends" />
      <AppShere />
    </View>
  );
};

export default ShareApp;
