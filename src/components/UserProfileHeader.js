import {View, Text} from 'react-native';
import React from 'react';
import BackButton from './BackButton';
import {fontSize, themeColor} from '../constant';

const UserProfileHeader = ({title}) => {
  return (
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
        {title}
      </Text>
    </View>
  );
};

export default UserProfileHeader;
