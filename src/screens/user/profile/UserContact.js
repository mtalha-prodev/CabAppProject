import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontSize, themeColor} from '../../../constant';

const UserContact = () => {
  return (
    <View style={style.container}>
      {/* header */}
      <UserProfileHeader title="Contact Us" />
      <View style={{width: '80%', alignSelf: 'center', paddingVertical: 20}}>
        <Ionicons
          name="call-outline"
          style={{
            fontSize: 120,
            color: themeColor.iconColor,
            marginVertical: 30,
          }}
        />
        <Text
          style={{
            fontSize: fontSize.title,
            fontWeight: fontSize.bold,
            color: themeColor.titleColor,
          }}>
          24/ 7 Call Center:
        </Text>
        <Text
          style={{
            fontSize: fontSize.btnTxt,
            color: themeColor.iconColor,
            marginVertical: 15,
          }}>
          03XXXXXXXXX
        </Text>
        <Ionicons
          name="mail-outline"
          style={{
            fontSize: 80,
            color: themeColor.iconColor,
            marginVertical: 30,
          }}
        />
        <Text
          style={{
            fontSize: fontSize.title,
            fontWeight: fontSize.bold,
            color: themeColor.titleColor,
            marginBottom: 20,
          }}>
          Email:
        </Text>
        <Text
          style={{
            fontSize: fontSize.btnTxt,
            color: themeColor.iconColor,
            marginVertical: 5,
          }}>
          YourName@website.com
        </Text>
        <Text
          style={{
            fontSize: fontSize.btnTxt,
            color: themeColor.iconColor,
            marginVertical: 5,
          }}>
          feedback@website.com
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default UserContact;
