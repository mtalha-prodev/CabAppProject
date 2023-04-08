import {View, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import ProfileEdit from '../../../components/ProfileEdit';
import {screenSize, themeColor} from '../../../constant';

const EditAccount = () => {
  return (
    <View
      style={{flex: 1, paddingVertical: screenSize.containerPaddingVertical}}>
      {/* profile header component */}
      <UserProfileHeader title="Profile" />
      <ScrollView>
        <ProfileEdit iconColor={themeColor.userIconColor} />
      </ScrollView>
    </View>
  );
};

export default EditAccount;
