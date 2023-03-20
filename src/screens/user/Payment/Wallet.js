import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import BackButton from '../../../components/BackButton';
import {fontSize, themeColor} from '../../../constant';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import UserProfileHeader from '../../../components/UserProfileHeader';

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
      <LinearGradient
        colors={[
          themeColor.bgColorTwo,
          themeColor.bgColorOne,
          themeColor.bgColor,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.02, 0.6, 1]}
        style={style.linearColor}>
        <Text style={{fontSize: fontSize.btnTxt, color: themeColor.bgCard}}>
          Raido Cash
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 35, color: themeColor.bgCard}}>RS 0.00</Text>
          <Ionicons
            style={{fontSize: 35, color: themeColor.iconColor}}
            name="chevron-forward-outline"
          />
        </View>
        <Text style={{fontSize: fontSize.btnTxt, color: themeColor.bgCard}}>
          Auto-refill is off
        </Text>
        <TouchableOpacity
          style={{
            width: 120,
            padding: 4,
            backgroundColor: themeColor.bgCard,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 30,
          }}>
          <Ionicons
            style={{fontSize: 30, color: themeColor.iconColor}}
            name="add-outline"
          />
          <Text style={{color: themeColor.txtColor}}>Add Founds</Text>
        </TouchableOpacity>
      </LinearGradient>

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
