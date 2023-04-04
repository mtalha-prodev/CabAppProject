import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../../constant';
import PriceCard from '../../components/PriceCard';
import Map from '../../components/Map';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import {ScrollView} from 'react-native-virtualized-view';

const MapDirections = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{position: 'absolute', top: 10, zIndex: 999}}>
        <BackButton />
      </View>
      <View style={{flex: 2}}>
        <Map />
      </View>
      <View
        style={{
          flex: 1.4,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#f3f3f3',
        }}>
        {/* Price Card */}
        <ScrollView style={{flex: 1, marginVertical: 15}}>
          <PriceCard vehicle="E-Rickshaw" price="500" time="15" />
          <PriceCard vehicle="Car E-Rickshaw" price="350" time="2" />
          <PriceCard vehicle="Bick E-Rickshaw" price="400" time="9" />
        </ScrollView>
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
          onPress={() => navigation.navigate('ConfirmRaide')}>
          <Text
            style={{
              fontSize: fontSize.btnTxt,
              fontWeight: fontSize.bold,
              color: themeColor.btnTxtColor,
            }}>
            Confirm Raide E-Drive
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapDirections;
