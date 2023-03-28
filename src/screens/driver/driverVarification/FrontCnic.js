import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TakePhoto from '../../../components/driverComponents/TakePhoto';
import {driverContent} from '../../ComanScreens/DriverContent';

const FrontCnic = () => {
  const frontCnicPhoto = () => {
    console.log('frontCnitPhoto');
  };

  return (
    <View style={style.container}>
      <TakePhoto
        title={driverContent.CnicTitle}
        text={driverContent.CnicTxt}
        handlePhoto={frontCnicPhoto}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FrontCnic;
