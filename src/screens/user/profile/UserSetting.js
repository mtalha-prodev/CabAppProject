import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {screenSize, themeColor} from '../../../constant';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Setting from '../../../components/Setting';

const UserSetting = () => {
  return (
    <View style={style.container}>
      {/* header */}
      <UserProfileHeader iconColor={themeColor.userIconColor} title="Setting" />
      <ScrollView>
        {/* profile pic  */}
        <Setting iconColor={themeColor.userIconColor} />
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
