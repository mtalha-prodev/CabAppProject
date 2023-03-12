import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {userContent} from '../screens/UserContent';
import {fontSize, themeColor} from '../constant';

const {width} = Dimensions.get('screen');
const Welcome = ({title, text}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        width: width - 50,
      }}>
      <Image
        source={require('../assets/img/userimg.png')}
        style={{width: width, height: 300}}
      />
      <Text style={style.title}>{title}</Text>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: fontSize.title,
    color: themeColor.titleColor,
  },
  text: {
    fontSize: fontSize.txt,
  },
});

export default Welcome;
