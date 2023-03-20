import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../../constant';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserProfileHeader from '../../../components/UserProfileHeader';

const Card = ({title, icon, onPress}) => {
  const navigation = useNavigation();
  // console.log(onPress);
  return (
    <TouchableOpacity
      // onPress={() => navigation.navigate(onPress)}
      style={{
        width: '100%',
        backgroundColor: themeColor.bgCard,
        elevation: 3,
        padding: 15,
        paddingHorizontal: 25,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons
            style={{fontSize: 32, color: themeColor.iconColor}}
            name={icon}
          />
          <Text
            style={{
              marginLeft: 20,
              fontSize: fontSize.btnTxt,
              color: themeColor.txtColor,
            }}>
            {title}
          </Text>
        </View>
        <Ionicons
          style={{
            fontSize: 32,
            color: themeColor.iconColor,
            alignSelf: 'flex-end',
          }}
          name={'chevron-forward-outline'}
        />
      </View>
    </TouchableOpacity>
  );
};

const UserSetting = () => {
  return (
    <View style={style.container}>
      {/* header */}
      <UserProfileHeader title="Setting" />
      {/* profile pic  */}
      <TouchableOpacity
        // onPress={() => navigation.navigate(onPress)}
        style={{
          width: '100%',
          backgroundColor: themeColor.bgCard,
          elevation: 3,
          padding: 15,
          paddingHorizontal: 25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/img/profile.jpg')}
            style={{width: 100, height: 100, borderRadius: 50}}
          />

          <View>
            <Text
              style={{
                marginLeft: 20,
                fontSize: fontSize.normalTitle,
                color: themeColor.titleColor,
              }}>
              Karla
            </Text>

            <Text
              style={{
                marginLeft: 20,
                fontSize: fontSize.txt,
                color: themeColor.txtColor,
              }}>
              03XXXXXXXXX
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: fontSize.txt,
                color: themeColor.txtColor,
              }}>
              YourName@website.com
            </Text>
          </View>
        </View>
        <Ionicons
          style={{
            fontSize: 32,
            color: themeColor.iconColor,
          }}
          name={'chevron-forward-outline'}
        />
      </TouchableOpacity>
      {/* section */}
      <View style={{marginVertical: 25}}>
        <Card title="Add Home" icon="home-outline" onPress="" />
        <Card title="Work" icon="people-outline" onPress="" />
        <Card title="Add more saved places" onPress="" />
      </View>
      <View style={{marginVertical: 15}}>
        <Card title="Complane" icon="settings-outline" onPress="" />
      </View>
      <View style={{marginVertical: 15}}>
        <Card title="terms and conditions" icon="settings-outline" onPress="" />
      </View>
      <View style={{marginVertical: 15}}>
        <Card title="Review" icon="settings-outline" onPress="" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default UserSetting;
