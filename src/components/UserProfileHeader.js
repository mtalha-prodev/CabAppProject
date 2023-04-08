import {View, Text} from 'react-native';
import React from 'react';
import BackButton from './BackButton';
import {fontSize, themeColor} from '../constant';

const UserProfileHeader = ({title, iconColor}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 2,
      }}>
      <BackButton iconColor={iconColor} />
      <Text
        style={{
          fontSize: fontSize.normalTitle,
          fontWeight: fontSize.bold,
          color: themeColor.titleColor,
          marginLeft: 10,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default UserProfileHeader;
