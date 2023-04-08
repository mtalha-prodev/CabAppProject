import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import Helps from '../../../components/Helps';
import {screenSize, themeColor} from '../../../constant';

const DriverHelp = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader
        iconColor={themeColor.driverBtnBgColor}
        title={'Help'}
      />
      <ScrollView>
        <Helps borderColor={themeColor.driverBorderColor} />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
});

export default DriverHelp;
