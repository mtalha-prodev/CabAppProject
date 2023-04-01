import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../../constant';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import UserProfileHeader from '../../../components/UserProfileHeader';
import AtmCard from '../../../components/AtmCard';

const Card = ({title, name, icon, type, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={style.card}>
      <Text style={style.title}>{title}</Text>
      <View style={{marginVertical: 14}}>
        <TouchableOpacity style={[style.cardBtn, {borderBottomWidth: 1}]}>
          <Ionicons
            style={[
              style.icon,
              {
                marginRight: 10,
              },
            ]}
            name={icon}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '90%',
            }}>
            <Text style={style.txt}>{name}</Text>
            <Ionicons style={style.icon} name="chevron-forward-outline" />
          </View>
        </TouchableOpacity>
      </View>
      {/*  */}
      <TouchableOpacity
        style={style.cardBtn}
        onPress={() => navigation.navigate(onPress)}>
        <Ionicons style={style.icon} name="add-outline" />
        <Text style={style.txt}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Wallet = () => {
  return (
    <View style={style.container}>
      {/* profile header component */}
      <UserProfileHeader title="wallet" />

      {/* bg color */}
      <AtmCard />

      {/* payment methods card */}
      <Card
        title="Payment Methods"
        name="Cash"
        icon="cash-outline"
        type="Add Payment Methods"
        onPress="PaymentMethod"
      />

      {/* voucher card */}
      <Card
        title="Vouchers"
        name="Vouchers"
        icon="cash-outline"
        type="Add you Voucher code"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  linearColor: {
    width: '85%',
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 15,
    justifyContent: 'space-evenly',
  },
  card: {
    width: '90%',
    backgroundColor: themeColor.bgCard,
    elevation: 3,
    alignSelf: 'center',
    borderRadius: 20,
    paddingVertical: 15,
    marginVertical: 15,
  },
  title: {
    color: themeColor.titleColor,
    fontSize: fontSize.btnTxt,
    marginLeft: 20,
  },
  cardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: themeColor.txtColor,
  },
  icon: {
    fontSize: 30,
    color: themeColor.iconColor,
  },
  txt: {color: themeColor.txtColor, fontSize: fontSize.btnTxt},
});

export default Wallet;
