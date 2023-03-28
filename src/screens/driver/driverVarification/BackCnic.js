import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TakePhoto from '../../../components/driverComponents/TakePhoto';
import {driverContent} from '../../ComanScreens/DriverContent';

const BackCnic = () => {
  const handlePhoto = () => {
    console.log('backCnicPhoto');
  };

  return (
    <View style={style.container}>
      <TakePhoto
        title={driverContent.CnicTitle}
        text={driverContent.CnicTxt}
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

export default BackCnic;
