import {View, Text} from 'react-native';
import React from 'react';
import Voucher from './Voucher';
import {fontSize, themeColor} from '../constant';

const Helps = () => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          marginLeft: 30,
          marginVertical: 20,
          color: themeColor.iconColor,
          fontSize: fontSize.normalTitle,
        }}>
        Your Recent Trips
      </Text>
      <Voucher />

      <View
        style={{
          elevation: 3,
          width: '90%',
          alignSelf: 'center',
          padding: 10,
          paddingVertical: 20,
          backgroundColor: themeColor.bgCard,
          borderRadius: 20,
        }}>
        <Text
          style={{fontSize: fontSize.normalTitle, color: themeColor.iconColor}}>
          1914 translation by H. Rackham
        </Text>
        <Text
          style={{
            fontSize: fontSize.btnTxt,
            marginVertical: 10,
            color: themeColor.txtColor,
          }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
      </View>
    </View>
  );
};

export default Helps;
