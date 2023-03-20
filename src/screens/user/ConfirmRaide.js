import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Map from '../../components/Map';
import {fontSize, themeColor} from '../../constant';
import PriceCard from '../../components/PriceCard';
import {useNavigation} from '@react-navigation/native';

const ConfirmRaide = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
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
            width: '80%',
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: fontSize.title, fontWeight: fontSize.bold}}>
              Driver Name
            </Text>
            <Text style={{fontSize: fontSize.txt, fontWeight: fontSize.bold}}>
              3 min Way
            </Text>
          </View>
          <Text style={{fontSize: fontSize.txt, alignSelf: 'flex-end'}}>
            Car Number & Model
          </Text>
          <Image
            source={require('../../assets/img/car.png')}
            style={{
              width: 180,
              height: 120,
              marginVertical: 20,
              alignSelf: 'center',
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: themeColor.btnBgColorTwo,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 20,
            marginBottom: 15,
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
});

export default ConfirmRaide;