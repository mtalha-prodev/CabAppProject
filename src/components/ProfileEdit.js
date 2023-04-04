import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const ProfileEdit = () => {
  return (
    <View style={style.container}>
      <View style={{height: 250}}>
        <Image
          source={require('../assets/img/bgimg.jpg')}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <TouchableOpacity
          style={[style.cameraIcon, {top: 15, right: 15, zIndex: 999}]}>
          <Ionicons
            style={{fontSize: 30, color: themeColor.userIconColor}}
            name="camera-outline"
          />
        </TouchableOpacity>
        <View style={[StyleSheet.absoluteFill, {justifyContent: 'flex-end'}]}>
          <Image
            source={require('../assets/img/profile.jpg')}
            style={{
              width: 90,
              height: 90,
              borderRadius: 50,
              alignSelf: 'center',
              bottom: -40,
            }}
          />
          <TouchableOpacity
            style={[
              style.cameraIcon,
              {
                alignSelf: 'center',
                bottom: -50,
                left: '40%',
                elevation: 3,
              },
            ]}>
            <Ionicons
              style={{fontSize: 30, color: themeColor.userIconColor}}
              name="camera-outline"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{marginTop: 60}}>
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
    color: themeColor.userIconColor,
  },
});

export default ProfileEdit;
