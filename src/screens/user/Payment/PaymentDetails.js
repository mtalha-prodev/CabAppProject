import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {fontSize, themeColor} from '../../../constant';
import BackButton from '../../../components/BackButton';
import VisaCard from '../../../components/VisaCard';
import {useNavigation} from '@react-navigation/native';
import UserProfileHeader from '../../../components/UserProfileHeader';

const PaymentDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      {/* profile header component */}
      <UserProfileHeader title="Payment" />

      {/* linear gradient */}
      <VisaCard />

      {/* Card details */}
      <View style={style.cardBody}>
        <Text style={style.text}>Card Holder Name</Text>
        <Text style={style.text}>Card Number</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.text}>Expiry MM/YY</Text>
          <Text
            style={[
              style.text,
              {
                borderBottomWidth: 1,
                width: '50%',
                borderColor: themeColor.txtColor,
              },
            ]}>
            CVC
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('PaymentEdit')}>
        <Text style={style.btnTxt}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  cardBody: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
    padding: 20,
    justifyContent: 'space-around',
  },

  text: {fontSize: fontSize.txt, color: themeColor.txtColor},
  btn: {
    backgroundColor: themeColor.btnBgColor,
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    color: themeColor.bgCard,
    fontWeight: fontSize.bold,
  },
});

export default PaymentDetails;
