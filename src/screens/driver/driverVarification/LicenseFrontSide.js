import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import TakePhoto from '../../../components/driverComponents/TakePhoto';

const LicenseFrontSide = () => {
  const handlePhoto = () => {
    console.log('license front');
  };
  return (
    <View style={style.container}>
      <TakePhoto
        title={driverContent.licenseTitle}
        text={driverContent.licenseTxt}
        handlePhoto={handlePhoto}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LicenseFrontSide;
