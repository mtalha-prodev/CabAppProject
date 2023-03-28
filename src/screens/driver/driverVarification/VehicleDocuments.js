import {View, StyleSheet} from 'react-native';
import React from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import TakePhoto from '../../../components/driverComponents/TakePhoto';

const VechicleDocuments = () => {
  const handlePhoto = () => {
    console.log('vehicle decuments');
  };
  return (
    <View style={style.container}>
      <TakePhoto
        title={driverContent.vehicleTitle}
        text={driverContent.vehicleTxt}
        handlePhoto={handlePhoto}
        vehicleForm={driverContent.vehicleTitleTwo}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VechicleDocuments;
