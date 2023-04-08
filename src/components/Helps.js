import {View, Text} from 'react-native';
import React from 'react';
import Voucher from './Voucher';
import {fontSize, screenSize, themeColor} from '../constant';

const Helps = ({borderColor}) => {
  return (
    <View
      style={{flex: 1, width: screenSize.wrapperWidth, alignSelf: 'center'}}>
      <Text
        style={{
          marginVertical: 10,
          color: borderColor,
          fontSize: fontSize.normalTitle,
        }}>
        Your Recent Trips
      </Text>
      <Voucher borderColor={borderColor} />

      <View
        style={{
          width: screenSize.wrapperWidth,
          padding: 15,
          paddingVertical: 20,
          backgroundColor: themeColor.bgCard,
          borderRadius: 10,
          borderBottomWidth: 0.1,
          elevation: 2,
        }}>
        <Text
          style={{
            fontSize: fontSize.normalTitle,
            color: borderColor,
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
