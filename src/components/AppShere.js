import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../constant';

const AppShere = ({iconColor}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          width: screenSize.wrapperWidth,
          alignSelf: 'center',
          marginVertical: 10,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: fontSize.title, color: iconColor}}>
          Invite to Friends Easy Auto Paper
        </Text>
        <Image
          source={require('../assets/img/cabImg.png')}
          style={{width: '100%', height: 300}}
        />

        <Text
          style={{
            fontSize: fontSize.normalTitle,
            color: themeColor.titleColor,
          }}>
          Share your friends by using these
        </Text>
        <View style={style.socialMedia}>
          <View style={style.iconBg}>
            <Image
              source={require('../assets/img/whatsapp.png')}
              style={style.socialIcon}
            />
          </View>
          <View style={style.iconBg}>
            <Image
              source={require('../assets/img/facebook.png')}
              style={style.socialIcon}
            />
          </View>
          <View style={style.iconBg}>
            <Image
              source={require('../assets/img/youtube.png')}
              style={style.socialIcon}
            />
          </View>
          <View style={style.iconBg}>
            <Image
              source={require('../assets/img/twitter.png')}
              style={style.socialIcon}
            />
          </View>
          <View style={style.iconBg}>
            <Image
              source={require('../assets/img/install.png')}
              style={style.socialIcon}
            />
          </View>
          <View style={style.iconBg}>
            <Image
              source={require('../assets/img/twitter.png')}
              style={style.socialIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  socialMedia: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: screenSize.wrapperWidth,
  },
  iconBg: {
    backgroundColor: themeColor.bgCard,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    elevation: 4,
  },

  socialIcon: {
    width: 60,
    height: 60,
  },
});

export default AppShere;
