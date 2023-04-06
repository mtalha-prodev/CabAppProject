import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Map from '../../components/Map';
import {fontSize, screenSize, themeColor} from '../../constant';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../components/BackButton';

const ConfirmRaide = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{position: 'absolute', top: 10, zIndex: 999}}>
        <BackButton iconColor={themeColor.userIconColor} />
      </View>
      <View style={{flex: 2}}>
        <Map />
      </View>
      <View
        style={{
          //   flex: 1.4,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#f3f3f3',
        }}>
        {/* Price Card */}

        <View
          style={{
            width: screenSize.wrapperWidth,
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={style.text}>Driver Name</Text>
            <Text style={style.text}>3 min Way</Text>
          </View>
          <Text
            style={{
              fontSize: fontSize.txt,
              alignSelf: 'flex-end',
              color: themeColor.txtColor,
            }}>
            Car Number & Model
          </Text>
          <Image
            source={require('../../assets/img/car.png')}
            style={{
              width: 180,
              height: 120,
              marginVertical: 10,
              alignSelf: 'center',
            }}
          />
        </View>

        {/* chat with btn */}

        <TouchableOpacity
          style={{
            backgroundColor: themeColor.userBtnBgColor,
            width: screenSize.btnWidth,
            justifyContent: 'center',
            alignItems: 'center',
            padding: screenSize.btnPadding,
            borderRadius: screenSize.btnRadius,
            marginVertical: screenSize.btnMarginVertical,
          }}
          onPress={() => navigation.navigate('ChatScreen')}>
          <Text
            style={{
              fontSize: fontSize.btnTxt,
              fontWeight: fontSize.bold,
              color: themeColor.btnTxtColor,
            }}>
            Chat With Drive
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: fontSize.normalTitle,
    color: themeColor.titleColor,
  },
});

export default ConfirmRaide;
