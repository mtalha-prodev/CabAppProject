import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Setting = ({iconColor}) => {
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
                marginLeft: 10,
                fontSize: fontSize.normalTitle,
                color: themeColor.titleColor,
              }}>
              Karla
            </Text>

            <Text style={style.text}>03XXXXXXXXX</Text>
            <Text style={style.text}>YourName@website.com</Text>
          </View>
        </View>
        <Ionicons
          style={{
            fontSize: 32,
            color: iconColor,
          }}
          name={'chevron-forward-outline'}
        />
      </TouchableOpacity>
      {/* section */}

      <Card
        iconColor={iconColor}
        title="Add Home"
        icon="home-outline"
        onPress=""
      />
      <Card
        iconColor={iconColor}
        title="Work"
        icon="people-outline"
        onPress=""
      />
      <Card iconColor={iconColor} title="Add more saved places" onPress="" />

      <Card
        iconColor={iconColor}
        title="Complane"
        icon="settings-outline"
        onPress=""
      />

      <Card
        iconColor={iconColor}
        title="terms and conditions"
        icon="settings-outline"
        onPress=""
      />

      <Card
        iconColor={iconColor}
        title="Review"
        icon="settings-outline"
        onPress=""
      />
    </View>
  );
};

const Card = ({title, icon, onPress, iconColor}) => {
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
          <Ionicons style={{fontSize: 32, color: iconColor}} name={icon} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: fontSize.btnTxt,
              color: themeColor.txtColor,
            }}>
            {title}
          </Text>
        </View>
        <Ionicons
          style={[style.icon, {color: iconColor}]}
          name={'chevron-forward-outline'}
        />
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
    padding: screenSize.btnMarginVertical,
    paddingHorizontal: 15,
    marginVertical: screenSize.btnMarginVertical,
  },

  icon: {
    fontSize: 32,
    alignSelf: 'flex-end',
  },
  text: {
    marginLeft: 10,
    fontSize: fontSize.txt,
    color: themeColor.txtColor,
  },
});

export default Setting;
