import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {screenSize, themeColor} from '../../../constant';
import AppShere from '../../../components/AppShere';
import UserProfileHeader from '../../../components/UserProfileHeader';

const DriverShareApp = () => {
  return (
    <View
      style={{flex: 1, marginVertical: screenSize.containerPaddingVertical}}>
      {/* user profile header  */}
      <UserProfileHeader
        iconColor={themeColor.driverIconColor}
        title="Invite Friends"
      />
      <ScrollView>
        <AppShere iconColor={themeColor.driverIconColor} />
      </ScrollView>
    </View>
  );
};

export default DriverShareApp;
