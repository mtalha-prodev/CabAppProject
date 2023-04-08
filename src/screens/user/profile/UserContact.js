import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontSize, screenSize, themeColor} from '../../../constant';

const UserContact = () => {
  return (
    <View style={style.container}>
      {/* header */}
      <UserProfileHeader
        iconColor={themeColor.userIconColor}
        title="Contact Us"
      />
      <ScrollView>
        {/* contact section */}
        <View style={style.wrapper}>
          <Ionicons
            name="call-outline"
            style={{
              fontSize: 120,
              color: themeColor.userIconColor,
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
              color: themeColor.userIconColor,
              marginVertical: 15,
            }}>
            03XXXXXXXXX
          </Text>
          <Ionicons
            name="mail-outline"
            style={{
              fontSize: 80,
              color: themeColor.userIconColor,
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
              color: themeColor.userIconColor,
              marginVertical: 5,
            }}>
            YourName@website.com
          </Text>
          <Text
            style={{
              fontSize: fontSize.btnTxt,
              color: themeColor.userIconColor,
              marginVertical: 5,
            }}>
            feedback@website.com
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: screenSize.containerPaddingVertical,
  },
  wrapper: {
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
    paddingVertical: 20,
  },
});

export default UserContact;
