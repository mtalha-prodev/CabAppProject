import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../../constant';
import UserProfileHeader from '../../../components/UserProfileHeader';
import AtmCard from '../../../components/AtmCard';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DriverWallet = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, paddingVertical: 20}}>
      <UserProfileHeader title={'Wallet'} />
      <AtmCard />

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
          onPress={() => navigation.navigate('DriverBank')}>
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
    paddingVertical: 20,
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

export default DriverWallet;