import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../constant';

const Voucher = ({borderColor}) => {
  return (
    <View style={style.container}>
      <Image
        source={require('../assets/img/profile.jpg')}
        style={{
          width: 60,
          height: 60,
          borderRadius: 60,
          marginRight: 20,
          alignSelf: 'flex-end',
        }}
      />
      <View style={[style.voucherBody, {borderBottomColor: borderColor}]}>
        <Text style={style.title}>Voucher</Text>
        <Text style={style.voucherTxt}>Karla Oskar</Text>
      </View>
      <View style={[style.voucherBody, {borderBottomColor: borderColor}]}>
        <Text style={style.title}>Date</Text>
        <Text style={style.voucherTxt}>23-02-2023</Text>
      </View>
      <View style={[style.voucherBody, {borderBottomColor: borderColor}]}>
        <Text style={style.title}>Amount</Text>
        <Text style={style.voucherTxt}>PKR 400</Text>
      </View>
      <View
        style={[
          style.voucherBody,
          {borderBottomWidth: 0, borderBottomColor: borderColor},
        ]}>
        <Text style={style.title}>Type</Text>
        <Text style={style.voucherTxt}>RAIDO CASH</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: themeColor.bgCard,
    elevation: 3,
    borderRadius: 10,
    paddingVertical: 10,
  },
  voucherBody: {
    justifyContent: 'space-between',
    marginVertical: 3,
    borderBottomWidth: 1,
    paddingVertical: 3,
  },
  title: {
    fontSize: fontSize.btnTxt,
    color: themeColor.titleColor,
    marginLeft: 15,
  },
  voucherTxt: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    marginLeft: 15,
  },
});

export default Voucher;
