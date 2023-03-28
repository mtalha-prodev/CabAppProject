import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TakePhoto from '../../../components/driverComponents/TakePhoto';
import {driverContent} from '../../ComanScreens/DriverContent';

const DriverPhoto = () => {
  const handlePhoto = () => {
    console.log('handlePhoto');
  };
  return (
    <View style={style.container}>
      <TakePhoto
        title={driverContent.photoTitle}
        text={driverContent.photoTxt}
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

export default DriverPhoto;
