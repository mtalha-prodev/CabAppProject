import {View, Alert, StyleSheet} from 'react-native';
import React from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import TakePhoto from '../../../components/driverComponents/TakePhoto';
import {screenSize} from '../../../constant';
import DocumentPicker from 'react-native-document-picker';

const LicenseBackSide = () => {
  const handlePhoto = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });
      // console.log(res);
      Alert.alert('Driver License', 'Image Upload Successfuly!');
    } catch (error) {
      Alert.alert('Aler', 'Please Select a Image!');
    }
  };
  return (
    <View style={style.container}>
      <TakePhoto
        title={driverContent.licenseBackTitle}
        text={driverContent.licenseTxt}
        handlePhoto={handlePhoto}
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

export default LicenseBackSide;
