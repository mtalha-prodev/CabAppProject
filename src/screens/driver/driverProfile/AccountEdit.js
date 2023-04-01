import {View, Text} from 'react-native';
import React from 'react';
import ProfileEdit from '../../../components/ProfileEdit';
import UserProfileHeader from '../../../components/UserProfileHeader';

const AccountEdit = () => {
  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      <UserProfileHeader title={'Profile'} />
      <ProfileEdit />
    </View>
  );
};

export default AccountEdit;
