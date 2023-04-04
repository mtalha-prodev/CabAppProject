import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  return (
    <View style={{flex: 1}}>
      {/* profile pic  */}
      <TouchableOpacity
        // onPress={() => navigation.navigate(onPress)}
        style={style.btnImg}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/img/profile.jpg')}
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
            color: themeColor.userIconColor,
          }}
          name={'chevron-forward-outline'}
        />
      </TouchableOpacity>
      {/* section */}

      <Card title="Add Home" icon="home-outline" onPress="" />
      <Card title="Work" icon="people-outline" onPress="" />
      <Card title="Add more saved places" onPress="" />

      <Card title="Complane" icon="settings-outline" onPress="" />

      <Card title="terms and conditions" icon="settings-outline" onPress="" />

      <Card title="Review" icon="settings-outline" onPress="" />
    </View>
  );
};

const Card = ({title, icon, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      // onPress={() => navigation.navigate(onPress)}
      style={style.cardBtn}>
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
        <Ionicons style={style.icon} name={'chevron-forward-outline'} />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnImg: {
    width: '100%',
    backgroundColor: themeColor.bgCard,
    elevation: 2,
    padding: screenSize.btnPadding,
    paddingHorizontal: screenSize.btnMarginVertical,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: screenSize.btnMarginVertical,
  },
  cardBtn: {
    width: '100%',
    backgroundColor: themeColor.bgCard,
    elevation: 3,
    padding: screenSize.btnPadding,
    paddingHorizontal: 15,
    marginVertical: screenSize.btnMarginVertical,
  },

  icon: {
    fontSize: 32,
    color: themeColor.userIconColor,
    alignSelf: 'flex-end',
  },
});

export default Setting;
