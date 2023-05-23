import {View, Alert, StyleSheet} from 'react-native';
import React from 'react';
import TakePhoto from '../../../components/driverComponents/TakePhoto';
import {driverContent} from '../../ComanScreens/DriverContent';
import {screenSize} from '../../../constant';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DriverPhoto = () => {
  const handlePhoto = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });

      if (res) {
        // console.log(res);
        await AsyncStorage.setItem('photo', 'true');
      }
      // console.log(res);
      Alert.alert('Front Side CNIC', 'Image Upload Successfuly!');
    } catch (error) {
      // console.log(error);
      Alert.alert('Aler', 'Please Select a Image!');
      await AsyncStorage.clearItem('photo');
    }
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
    paddingVertical: screenSize.containerPaddingVertical,
  },
});

export default DriverPhoto;
