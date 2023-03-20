import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import BackButton from '../../../components/BackButton';
import VisaCard from '../../../components/VisaCard';
import {fontSize, themeColor} from '../../../constant';
import UserProfileHeader from '../../../components/UserProfileHeader';

const PaymentEdit = () => {
  return (
    <View style={style.container}>
      {/* profile header component */}
      <UserProfileHeader title="Payment" />

      {/* linear gradient */}
      <VisaCard />

      {/* Card details */}
      <View style={style.cardBody}>
        <Text style={style.text}>Megan Susan</Text>
        <Text style={style.text}>5423-7865-7734-2034</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.text}>01-23</Text>
          <Text
            style={[
              style.text,
              {
                borderBottomWidth: 1,
                width: '50%',
                borderColor: themeColor.txtColor,
              },
            ]}>
            969
          </Text>
        </View>
      </View>
      <TouchableOpacity style={style.btn}>
        <Text
          style={{
            fontSize: fontSize.btnTxt,
            color: themeColor.bgCard,
            fontWeight: fontSize.bold,
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
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
  cardBody: {
    flex: 1,
    width: '85%',
    alignSelf: 'center',
    padding: 20,
    justifyContent: 'space-around',
  },
});

export default PaymentEdit;
