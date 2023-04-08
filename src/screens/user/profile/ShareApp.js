import {View, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import AppShere from '../../../components/AppShere';
import {screenSize, themeColor} from '../../../constant';

const ShareApp = () => {
  return (
    <View
      style={{flex: 1, marginVertical: screenSize.containerPaddingVertical}}>
      {/* user profile header  */}
      <UserProfileHeader
        iconColor={themeColor.userIconColor}
        title="Invite Friends"
      />
      <ScrollView>
        <AppShere iconColor={themeColor.userIconColor} />
      </ScrollView>
    </View>
  );
};

export default ShareApp;
