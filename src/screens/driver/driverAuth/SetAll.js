import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import {fontSize, themeColor} from '../../../constant';
import {useNavigation} from '@react-navigation/native';

const SetAll = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.title}>{driverContent.setAllTitle}</Text>
      <Text style={style.text}>{driverContent.setAllTxt}</Text>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('RaidoChoose')}>
        <Text style={style.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: fontSize.title,
    color: themeColor.titleColor,
  },
  text: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    marginVertical: 20,
  },
  btn: {
    width: '100%',
    padding: 8,
    alignSelf: 'center',
    backgroundColor: themeColor.btnBgColor,
    borderRadius: 20,
    marginTop: 40,
  },
  btnText: {
    fontSize: fontSize.btnTxt,
    alignSelf: 'center',
    color: themeColor.bgCard,
  },
});

export default SetAll;
