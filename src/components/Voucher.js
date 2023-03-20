import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../constant';

const Voucher = () => {
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
      <View style={style.voucherBody}>
        <Text style={style.title}>Voucher</Text>
        <Text style={style.voucherTxt}>Karla Oskar</Text>
      </View>
      <View style={style.voucherBody}>
        <Text style={style.title}>Date</Text>
        <Text style={style.voucherTxt}>23-02-2023</Text>
      </View>
      <View style={style.voucherBody}>
        <Text style={style.title}>Amount</Text>
        <Text style={style.voucherTxt}>PKR 400</Text>
      </View>
      <View style={[style.voucherBody, {borderBottomWidth: 0}]}>
        <Text style={style.title}>Type</Text>
        <Text style={style.voucherTxt}>RAIDO CASH</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: themeColor.bgCard,
    elevation: 4,
    borderRadius: 20,
    paddingVertical: 25,
  },
  voucherBody: {
    justifyContent: 'space-between',
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingVertical: 5,
    borderBottomColor: themeColor.txtColor,
  },
  title: {
    fontSize: fontSize.btnTxt,
    color: themeColor.titleColor,
    marginLeft: 20,
  },
  voucherTxt: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    marginLeft: 20,
  },
});

export default Voucher;
