import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../constant';
import PriceCard from '../../components/PriceCard';
import Map from '../../components/Map';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../components/BackButton';

const MapDirections = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{position: 'absolute', left: 25, top: 25, zIndex: 999}}>
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

        <PriceCard />
        <PriceCard />
        <PriceCard />

        <TouchableOpacity
          style={{
            backgroundColor: themeColor.btnBgColorTwo,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 20,
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
