import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import UserProfileHeader from '../../../components/UserProfileHeader';
import AtmCard from '../../../components/AtmCard';

const Card = ({title, name, icon, type, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={style.card}>
      <Text style={style.title}>{title}</Text>
      <View style={{marginVertical: 10}}>
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
              width: screenSize.wrapperWidth,
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
      <UserProfileHeader iconColor={themeColor.userIconColor} title="wallet" />
      <ScrollView>
        {/* bg color */}
        <AtmCard iconColor={themeColor.userIconColor} />

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
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  card: {
    width: screenSize.wrapperWidth,
    backgroundColor: themeColor.bgCard,
    elevation: 3,
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 10,
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
    color: themeColor.userIconColor,
  },
  txt: {color: themeColor.txtColor, fontSize: fontSize.btnTxt},
});

export default Wallet;
