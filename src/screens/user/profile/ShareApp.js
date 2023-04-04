import {View, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import AppShere from '../../../components/AppShere';
import {screenSize} from '../../../constant';

const ShareApp = () => {
  return (
    <View
      style={{flex: 1, marginVertical: screenSize.containerPaddingVertical}}>
      {/* user profile header  */}
      <UserProfileHeader title="Invite Friends" />
      <ScrollView>
        <AppShere />
      </ScrollView>
    </View>
  );
};

export default ShareApp;
