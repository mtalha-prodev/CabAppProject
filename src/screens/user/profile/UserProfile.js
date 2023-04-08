import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/BackButton';
import {ScrollView} from 'react-native-virtualized-view';

const {width} = Dimensions.get('screen');
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
        marginVertical: 8,
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
            style={{fontSize: 32, color: themeColor.userIconColor}}
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
            color: themeColor.userIconColor,
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
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: width}}>
        <View style={style.header}>
          <BackButton iconColor={themeColor.userIconColor} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 15,
            }}>
            <Text
              style={{
                color: themeColor.txtColor,
                fontSize: fontSize.btnTxt,
                fontWeight: fontSize.bold,
                marginRight: 10,
              }}>
              Jone Sparow
            </Text>
            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => navigation.navigate('UserEditAccount')}>
              <Image
                source={require('../../../assets/img/profile.jpg')}
                style={{width: 50, height: 50, borderRadius: 50}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{margineVertical: 10}}>
          <View style={style.cart}>
            <TouchableOpacity
              style={style.btn}
              onPress={() => navigation.navigate('UserHelp')}>
              <Ionicons style={style.fontIcon} name={'help-buoy-outline'} />
              <Text style={style.text}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              onPress={() => navigation.navigate('UserWallet')}>
              <Ionicons style={style.fontIcon} name={'wallet-outline'} />
              <Text style={style.text}>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.btn}
              onPress={() => navigation.navigate('UserTrips')}>
              <Ionicons style={style.fontIcon} name={'timer-outline'} />
              <Text style={style.text}>Trips</Text>
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
          <Card
            title="Share app"
            icon="share-social-outline"
            onPress="SheraApp"
          />
          <Card title="Logout" icon="log-out-outline" onPress="Logout" />
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: screenSize.containerPaddingVertical,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 10,
  },
  btn: {
    backgroundColor: themeColor.bgCard,
    padding: 20,
    width: '28%',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
  },
  fontIcon: {
    fontSize: 30,
    color: themeColor.userIconColor,
  },
  text: {
    color: themeColor.txtColor,
  },
});

export default UserProfile;
