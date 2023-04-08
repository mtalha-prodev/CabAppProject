import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {useNavigation} from '@react-navigation/native';

const Card = ({setSelected, value, color, textColor}) => {
  return (
    <TouchableOpacity
      style={[style.cardBtn, {backgroundColor: color}]}
      onPress={() => setSelected(value)}>
      <Image
        source={require('../../../assets/img/car.png')}
        style={{width: 100, height: 100, marginRight: 20}}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            color: themeColor.titleColor,
            fontSize: fontSize.normalTitle,
          }}>
          {driverContent.chooseRaidTitle}
        </Text>
        <Text
          style={{
            color: textColor,
            fontSize: fontSize.txt,
          }}>
          {driverContent.chooseRaidtxt}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RaidoChoose = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);

  console.log(selected);

  return (
    <View style={style.container}>
      <View>
        <Text
          style={{
            color: themeColor.titleColor,
            fontSize: fontSize.normalTitle,
            marginVertical: 20,
          }}>
          {driverContent.chooseVehicleTitle}
        </Text>
        <Card
          value={0}
          color={
            selected === 0 ? themeColor.driverBtnBgColor : themeColor.bgCard
          }
          textColor={selected !== 0 ? themeColor.txtColor : themeColor.bgCard}
          setSelected={setSelected}
          selected={selected}
        />
        <Card
          value={1}
          color={
            selected === 1 ? themeColor.driverBtnBgColor : themeColor.bgCard
          }
          textColor={selected !== 1 ? themeColor.txtColor : themeColor.bgCard}
          setSelected={setSelected}
          selected={selected}
        />
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
    width: screenSize.wrapperWidth,
    paddingVertical: screenSize.containerPaddingVertical,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  btn: {
    width: screenSize.btnWidth,
    padding: screenSize.btnPadding,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.driverBtnBgColor,
    borderRadius: screenSize.btnRadius,
  },
  btnTxt: {
    color: themeColor.bgCard,
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
  },

  // card
  cardBtn: {
    flexDirection: 'row',
    width: screenSize.btnWidth,
    alignItems: 'center',
    backgroundColor: themeColor.bgCard,
    paddingVertical: screenSize.btnPadding,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: screenSize.btnMarginVertical,
    elevation: 3,
  },
});

export default RaidoChoose;
