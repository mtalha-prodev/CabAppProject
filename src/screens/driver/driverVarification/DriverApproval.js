import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {driverContent} from '../../ComanScreens/DriverContent';
import {fontSize, themeColor} from '../../../constant';

const DriverApproval = () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>{driverContent.approvalTitle}</Text>
        <View
          style={{
            height: 200,
            borderRadius: 20,
            backgroundColor: themeColor.bgCard,
          }}>
          <Text style={style.text}>{driverContent.approvalTxt}</Text>
        </View>
        <Text style={{color: themeColor.txtColor, alignSelf: 'flex-end'}}>
          Resend request
        </Text>
      </View>
      {/* bottom  */}
      <View>
        <View>
          <Text
            style={{
              color: themeColor.titleColor,
              fontSize: fontSize.normalTitle,
            }}>
            24/ 7 Call Center:
          </Text>
          <Text style={{color: themeColor.txtColor, fontSize: fontSize.txt}}>
            03XXXXXXXXX
          </Text>
        </View>
        <TouchableOpacity style={style.btn}>
          <Text style={style.btnTxt}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: themeColor.titleColor,
    fontSize: fontSize.title,
  },
  text: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
  },

  btn: {
    backgroundColor: themeColor.btnBgColor,
    padding: 8,
    borderRadius: 15,
  },
  text: {
    color: themeColor.bgCard,
    fontSize: fontSize.btnTxt,
  },
});

export default DriverApproval;
