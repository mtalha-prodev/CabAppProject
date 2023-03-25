import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import {fontSize, themeColor} from '../../../constant';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');

const Card = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: width - 60,
        alignItems: 'center',
        backgroundColor: themeColor.bgCard,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 20,
      }}>
      <Image
        source={require('../../../assets/img/car.png')}
        style={{width: 100, height: 100, marginRight: 20}}
      />
      <View>
        <Text
          style={{
            color: themeColor.titleColor,
            fontSize: fontSize.normalTitle,
          }}>
          {driverContent.chooseRaidTitle}
        </Text>
        <Text
          style={{
            color: themeColor.txtColor,
            fontSize: fontSize.txt,
            width: width - 180,
          }}>
          {driverContent.chooseRaidtxt}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RaidoChoose = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View
        style={{
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: themeColor.btnBgColorTwo,
        }}>
        <Text
          style={{
            color: themeColor.titleColor,
            fontSize: fontSize.title,
            marginVertical: 20,
          }}>
          {driverContent.chooseVehicleTitle}
        </Text>
        <Card />
        <Card />
      </View>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('DriverRequired')}>
        <Text style={style.btnTxt}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: width - 50,
    paddingVertical: 25,
    alignSelf: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  btn: {
    width: width - 50,
    padding: 8,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.btnBgColor,
    borderRadius: 20,
  },
  btnTxt: {
    color: themeColor.bgCard,
    fontSize: fontSize.btnTxt,
  },
});

export default RaidoChoose;
