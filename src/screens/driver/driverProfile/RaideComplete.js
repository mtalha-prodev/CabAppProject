import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RaideComplete = () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={[style.title, {marginLeft: 30}]}>korla Oskala</Text>
        <View style={style.profile}>
          <Image
            source={require('../../../assets/img/profile.jpg')}
            style={style.img}
          />
          <Text style={style.text}>Your Trip with Korla Okala</Text>
        </View>
        <View
          style={{
            marginVertical: 20,
            padding: 30,
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor: themeColor.bgColor,
          }}>
          <Text style={style.text}>Amount Details</Text>
          <View style={style.cardBody}>
            <Text style={style.title}>Total</Text>
            <Text style={style.title}>RS 250</Text>
          </View>
          <View style={style.cardBody}>
            <Text style={style.text}>Customer payed Cash</Text>
            <Text style={style.text}>RS 250</Text>
          </View>
          <View style={style.cardBody}>
            <Text style={style.text}>RAIDO E-Rickshaw fee </Text>
            <Text style={style.text}>RS -50</Text>
          </View>
          <View style={style.cardBody}>
            <Text style={style.text}>Your current Earning</Text>
            <Text style={style.text}>RS 200</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={style.btn}>
        <Text style={style.btnText}>Continoue</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: fontSize.title,
    color: themeColor.titleColor,
    marginVertical: 20,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 15,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: themeColor.txtColor,
    marginVertical: 5,
    fontSize: fontSize.txt,
  },
  btn: {
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.driverBtnBgColor,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 20,
  },
  btnText: {
    fontSize: fontSize.btnTxt,
    color: themeColor.bgCard,
  },
});

export default RaideComplete;
