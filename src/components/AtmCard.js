import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fontSize, screenSize, themeColor} from '../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AtmCard = () => {
  return (
    <View>
      <LinearGradient
        colors={[
          themeColor.bgColorTwo,
          themeColor.bgColorOne,
          themeColor.bgColor,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.02, 0.6, 1]}
        style={style.linearColor}>
        <Text style={{fontSize: fontSize.btnTxt, color: themeColor.bgCard}}>
          Raido Cash
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 35, color: themeColor.bgCard}}>RS 0.00</Text>
          <Ionicons
            style={{fontSize: 35, color: themeColor.userIconColor}}
            name="chevron-forward-outline"
          />
        </View>
        <Text style={{fontSize: fontSize.btnTxt, color: themeColor.bgCard}}>
          Auto-refill is off
        </Text>
        <TouchableOpacity
          style={{
            width: 120,
            padding: 4,
            backgroundColor: themeColor.bgCard,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 30,
          }}>
          <Ionicons
            style={{fontSize: 30, color: themeColor.userIconColor}}
            name="add-outline"
          />
          <Text style={{color: themeColor.txtColor}}>Add Founds</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  linearColor: {
    width: screenSize.wrapperWidth,
    height: 200,
    alignSelf: 'center',
    borderRadius: 15,
    paddingHorizontal: 22,
    paddingVertical: 15,
    justifyContent: 'space-evenly',
  },
  card: {
    width: screenSize.wrapperWidth,
    backgroundColor: themeColor.bgCard,
    elevation: 3,
    alignSelf: 'center',
    borderRadius: 15,
    paddingVertical: 15,
    marginVertical: 10,
  },
  title: {
    color: themeColor.titleColor,
    fontSize: fontSize.btnTxt,
    marginLeft: 20,
  },
  cardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: themeColor.txtColor,
  },
  icon: {
    fontSize: 30,
    color: themeColor.userIconColor,
  },
  txt: {color: themeColor.txtColor, fontSize: fontSize.btnTxt},
});

export default AtmCard;
