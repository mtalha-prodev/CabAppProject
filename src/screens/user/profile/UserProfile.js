import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../../constant';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Card = ({title, icon, onPress}) => {
  const navigation = useNavigation();
  // console.log(onPress);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(onPress)}
      style={{
        width: '100%',
        backgroundColor: themeColor.bgCard,
        elevation: 3,
        marginVertical: 10,
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
          <Text style={{marginLeft: 20, fontSize: fontSize.btnTxt}}>
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

const UserProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text>Back</Text>
        <Text style={{color: themeColor.txtColor}}>M.Talha</Text>
        <TouchableOpacity
          style={{padding: 5}}
          onPress={() => navigation.navigate('UserEditAccount')}>
          <Image
            source={require('../../../assets/img/profile.jpg')}
            style={{width: 50, height: 50, borderRadius: 50}}
          />
        </TouchableOpacity>
      </View>
      <View style={style.cart}>
        <TouchableOpacity style={style.btn}>
          <Ionicons style={style.fontIcon} name={'help-buoy-outline'} />
          <Text>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate('UserWallet')}>
          <Ionicons style={style.fontIcon} name={'wallet-outline'} />
          <Text>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Ionicons style={style.fontIcon} name={'timer-outline'} />
          <Text>Trips</Text>
        </TouchableOpacity>
      </View>
      <Card
        title="Notification"
        onPress="UserNotification"
        icon="notifications-outline"
      />
      <Card title="Setting" icon="settings-outline" onPress="UserSetting" />
      <Card title="Contact us" icon="call-outline" onPress="UserContact" />
      <Card title="Rate us app" icon="star-half-outline" onPress="RateUs" />
      <Card title="Emergence Call" onPress="Emergence" icon="call" />
      <Card title="Share app" icon="share-social-outline" onPress="SheraApp" />
      <Card title="Logout" icon="log-out-outline" onPress="Logout" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    // marginVertical: 10,
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: themeColor.bgCard,
    padding: 20,
    width: 80,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
  },
  fontIcon: {
    fontSize: 30,
    color: themeColor.iconColor,
  },
});

export default UserProfile;
