import {View, Text} from 'react-native';
import React from 'react';
import Voucher from './Voucher';
import {fontSize, screenSize, themeColor} from '../constant';

const Helps = () => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          marginLeft: 30,
          marginVertical: 10,
          color: themeColor.userIconColor,
          fontSize: fontSize.normalTitle,
        }}>
        Your Recent Trips
      </Text>
      <Voucher />

      <View
        style={{
          elevation: 3,
          width: screenSize.wrapperWidth,
          alignSelf: 'center',
          padding: 10,
          paddingVertical: 20,
          backgroundColor: themeColor.bgCard,
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontSize: fontSize.normalTitle,
            color: themeColor.userIconColor,
          }}>
          1914 translation by H. Rackham
        </Text>
        <Text
          style={{
            fontSize: fontSize.btnTxt,
            marginVertical: 10,
            color: themeColor.txtColor,
            textAlign: 'justify',
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
