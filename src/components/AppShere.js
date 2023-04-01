import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../constant';

const AppShere = () => {
  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      <View style={{width: '85%', alignSelf: 'center', marginVertical: 20}}>
        <Text style={{fontSize: fontSize.title, color: themeColor.iconColor}}>
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
            marginVertical: 10,
          }}>
          Share your friends by using these
        </Text>
        <View style={style.socialMedia}>
          <Image
            source={require('../assets/img/whatsapp.png')}
            style={style.socialIcon}
          />
          <Image
            source={require('../assets/img/facebook.png')}
            style={style.socialIcon}
          />
          <Image
            source={require('../assets/img/youtube.png')}
            style={style.socialIcon}
          />
          <Image
            source={require('../assets/img/twitter.png')}
            style={style.socialIcon}
          />
          <Image
            source={require('../assets/img/install.png')}
            style={style.socialIcon}
          />
          <Image
            source={require('../assets/img/twitter.png')}
            style={style.socialIcon}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  socialMedia: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },

  socialIcon: {
    width: 60,
    height: 60,
    margin: 12,
  },
});

export default AppShere;
