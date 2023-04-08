import {View, ScrollView} from 'react-native';
import React from 'react';
import ProfileEdit from '../../../components/ProfileEdit';
import UserProfileHeader from '../../../components/UserProfileHeader';
import {screenSize, themeColor} from '../../../constant';

const AccountEdit = () => {
  return (
    <View
      style={{flex: 1, paddingVertical: screenSize.containerPaddingVertical}}>
      <UserProfileHeader
        title={'Profile'}
        iconColor={themeColor.driverIconColor}
      />
      <ScrollView>
        <ProfileEdit iconColor={themeColor.driverIconColor} />
      </ScrollView>
    </View>
  );
};

export default AccountEdit;
