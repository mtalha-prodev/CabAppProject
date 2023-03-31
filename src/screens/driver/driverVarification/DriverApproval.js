import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import {fontSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const DriverApproval = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>{driverContent.approvalTitle}</Text>
        <View style={style.content}>
          <Text style={style.text}>{driverContent.approvalTxt}</Text>
        </View>
        <Text style={{color: themeColor.txtColor, alignSelf: 'flex-end'}}>
          Resend request
        </Text>
      </View>
      {/* bottom  */}
      <View style={{justifyContent: 'space-between', flex: 1}}>
        <View>
          <Ionicons name={'call-outline'} style={style.icon} />

          <Text
            style={{
              color: themeColor.titleColor,
              fontSize: fontSize.normalTitle,
              marginVertical: 10,
            }}>
            24/ 7 Call Center:
          </Text>
          <Text style={{color: themeColor.txtColor, fontSize: fontSize.txt}}>
            03XXXXXXXXX
          </Text>
        </View>
        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate('DriverProfile')}>
          <Text style={style.btnTxt}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  content: {
    height: 200,
    borderRadius: 20,
    backgroundColor: themeColor.bgCard,
    elevation: 3,
    marginVertical: 20,
    padding: 20,
  },
  title: {
    color: themeColor.titleColor,
    fontSize: fontSize.title,
  },
  text: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
  },
  icon: {
    color: themeColor.iconColor,
    fontSize: 50,
    marginVertical: 25,
  },

  btn: {
    backgroundColor: themeColor.btnBgColor,
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: themeColor.bgCard,
    fontSize: fontSize.btnTxt,
  },
});

export default DriverApproval;
