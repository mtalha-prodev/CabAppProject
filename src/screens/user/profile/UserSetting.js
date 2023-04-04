import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {screenSize} from '../../../constant';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Setting from '../../../components/Setting';

const UserSetting = () => {
  return (
    <View style={style.container}>
      {/* header */}
      <UserProfileHeader title="Setting" />
      <ScrollView>
        {/* profile pic  */}
        <Setting />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: screenSize.containerPaddingVertical,
  },
});

export default UserSetting;
