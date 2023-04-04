import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../constant';

const NotiComponent = ({title, msg}) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.txt}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: themeColor.bgCard,
    elevation: 3,
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
    marginBottom: screenSize.btnMarginVertical,
    paddingHorizontal: screenSize.btnPadding,
    borderRadius: 15,
  },
  title: {
    fontSize: fontSize.normalTitle,
    color: themeColor.titleColor,
  },
  txt: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    marginVertical: 10,
    textAlign: 'justify',
  },
});

export default NotiComponent;
