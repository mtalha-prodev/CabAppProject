import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import {fontSize, themeColor} from '../../../constant';
import UserProfileHeader from '../../../components/UserProfileHeader';

const UserEdit = ({name, fieldName}) => {
  return (
    <TouchableOpacity style={style.btn}>
      <Text style={{color: themeColor.txtColor}}>{fieldName}</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: themeColor.titleColor,
            fontSize: fontSize.txt,
            fontWeight: fontSize.bold,
          }}>
          {name}
        </Text>
        <Ionicons style={style.icon} name="chevron-forward-outline" />
      </View>
    </TouchableOpacity>
  );
};

const EditAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      {/* profile header component */}
      <UserProfileHeader title="Edit Account" />

      <View style={{height: 250}}>
        <Image
          source={require('../../../assets/img/bgimg.jpg')}
          style={{
            width: '100%',
            height: '100%',
            marginVertical: 20,
          }}
        />
        <TouchableOpacity
          style={[style.cameraIcon, {top: 35, right: 20, zIndex: 999}]}>
          <Ionicons
            style={{fontSize: 30, color: themeColor.iconColor}}
            name="camera-outline"
          />
        </TouchableOpacity>
        <View style={[StyleSheet.absoluteFill, {justifyContent: 'flex-end'}]}>
          <Image
            source={require('../../../assets/img/profile.jpg')}
            style={{
              width: 90,
              height: 90,
              borderRadius: 50,
              alignSelf: 'center',
              bottom: -65,
            }}
          />
          <TouchableOpacity
            style={[
              style.cameraIcon,
              {
                alignSelf: 'center',
                bottom: -75,
                left: '40%',
                elevation: 3,
              },
            ]}>
            <Ionicons
              style={{fontSize: 30, color: themeColor.iconColor}}
              name="camera-outline"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 100}}>
        <UserEdit name="Daval Max" fieldName="first name" />
        <UserEdit name="Max" fieldName="surname" />
        <UserEdit name="talha@gmail.com" fieldName="email" />
        <UserEdit name="03XXXXXXXXX" fieldName="mobile" />
        <UserEdit name="***********" fieldName="password" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  cameraIcon: {
    backgroundColor: themeColor.bgCard,
    width: 40,
    height: 40,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    alignSelf: 'flex-end',
    padding: 3,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    // elevation: 2,
    borderWidth: 1,
    borderColor: themeColor.btnTxtColor,
    marginVertical: 5,
  },
  icon: {
    fontSize: 30,
    color: themeColor.iconColor,
  },
});

export default EditAccount;
