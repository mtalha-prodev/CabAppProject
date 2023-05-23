import {View, StyleSheet, Alert} from 'react-native';
import React from 'react';
import TakePhoto from '../../../components/driverComponents/TakePhoto';
import {driverContent} from '../../ComanScreens/DriverContent';
import DocumentPicker from 'react-native-document-picker';
import {screenSize} from '../../../constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BackCnic = () => {
  const handlePhoto = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });
      // console.log(res);
      if (res) {
        // console.log(res);
        await AsyncStorage.setItem('back-cnic', 'true');
      }
      Alert.alert('Back Side CNIC', 'Image Upload Successfuly!');
    } catch (error) {
      Alert.alert('Aler', 'Please Select a Image!');
      await AsyncStorage.clearItem('back-cnic');
    }
  };

  return (
    <View style={style.container}>
      <TakePhoto
        title={driverContent.CnicBackTitle}
        text={driverContent.CnicTxt}
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

export default BackCnic;
