import {View, Alert, StyleSheet} from 'react-native';
import React from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import TakePhoto from '../../../components/driverComponents/TakePhoto';
import {screenSize} from '../../../constant';

const VechicleDocuments = () => {
  const handlePhoto = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });
      // console.log(res);
      Alert.alert('Registration Documents', 'Image Upload Successfuly!');
    } catch (error) {
      Alert.alert('Aler', 'Please Select a Image!');
    }
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
    paddingVertical: screenSize.containerPaddingVertical,
  },
});

export default VechicleDocuments;
