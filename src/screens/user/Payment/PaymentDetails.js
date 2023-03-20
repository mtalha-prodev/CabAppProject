import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../../constant';
import BackButton from '../../../components/BackButton';
import VisaCard from '../../../components/VisaCard';

const PaymentDetails = () => {
  return (
    <View style={style.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 20,
        }}>
        <BackButton />
        <Text
          style={{
            fontSize: fontSize.normalTitle,
            fontWeight: fontSize.bold,
            color: themeColor.titleColor,
          }}>
          Add Payment Methods
        </Text>
      </View>

      {/* linear gradient */}
      <VisaCard />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  visaCard: {
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 23,
    marginVertical: 25,
  },
  linearColor: {
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default PaymentDetails;
