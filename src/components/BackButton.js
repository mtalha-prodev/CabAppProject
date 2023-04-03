import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {themeColor} from '../constant';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style.btn} onPress={() => navigation.goBack()}>
      <Ionicons style={style.icon} name="arrow-back-outline" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btn: {
    backgroundColor: themeColor.bgCard,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    elevation: 4,
    marginLeft: 15,
  },
  icon: {
    fontSize: 35,
    color: themeColor.userIconColor,
  },
});

export default BackButton;
