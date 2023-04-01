import {View} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import ProfileEdit from '../../../components/ProfileEdit';

const EditAccount = () => {
  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      {/* profile header component */}
      <UserProfileHeader title="Edit Account" />

      <ProfileEdit />
    </View>
  );
};

export default EditAccount;
