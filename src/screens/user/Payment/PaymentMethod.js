import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BackButton from '../../../components/BackButton';
import {fontSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import UserProfileHeader from '../../../components/UserProfileHeader';

const PaymentMethod = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      {/* profile header component */}
      <UserProfileHeader title="Add Payment Methods" />
      {/*  */}

      <View style={style.card}>
        <Text
          style={{
            color: themeColor.txtColor,
            fontSize: fontSize.btnTxt,
            marginLeft: 15,
          }}>
          Payment Methods
        </Text>
        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate('PaymentDetails')}>
          <Ionicons name="cash-outline" style={style.icon} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <Text style={style.text}>credit or debit card </Text>
            <Ionicons name="chevron-forward-outline" style={style.icon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  card: {
    alignSelf: 'center',
    width: '85%',
    marginVertical: 30,
  },
  btn: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: themeColor.txtColor,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color: themeColor.iconColor,
  },
  text: {
    color: themeColor.txtColor,
    marginLeft: 10,
    fontSize: fontSize.txt,
  },
});

export default PaymentMethod;
