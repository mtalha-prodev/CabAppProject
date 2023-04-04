import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
// map
import MapView, {Marker} from 'react-native-maps';

import React, {useRef, useState} from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');
const UserMainScreen = () => {
  const [location, setLocation] = useState({
    pickupCords: {
      latitude: 31.4545,
      longitude: 74.351,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCords: {
      latitude: 31.4758,
      longitude: 74.3426,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const mapRef = useRef();

  const {pickupCords, dropLocationCords} = location;

  const navigation = useNavigation();

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={style.scroll}>
      <View style={style.container}>
        {/* top */}
        <View style={{width: width, alignItems: 'flex-end'}}>
          <View
            style={{
              marginRight: 5,
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserProfile')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'flex-end',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  marginRight: 10,
                  fontSize: fontSize.btnTxt,
                  fontWeight: fontSize.bold,
                  color: themeColor.txtColor,
                }}>
                Jone Sparow
              </Text>
              <Image
                source={require('../../../assets/img/profile.jpg')}
                style={{width: 55, height: 55, borderRadius: 50}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: width}}>
            <Image
              source={require('../../../assets/img/taxi.jpg')}
              style={{width: width, height: 250}}
            />
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  justifyContent: 'space-around',
                  width: screenSize.wrapperWidth,
                  marginLeft: 20,
                },
              ]}>
              <View>
                <Text
                  style={{
                    fontSize: fontSize.normalTitle,
                    color: themeColor.bgCard,
                  }}>
                  Make your life much easier
                </Text>
                <Text
                  style={{
                    fontSize: fontSize.btnTxt,
                    color: themeColor.bgColor,
                    marginTop: screenSize.btnMarginVertical,
                  }}>
                  Order now & get 50% off of your first ride
                </Text>
              </View>
              <TouchableOpacity style={style.orderBtn}>
                <Text
                  style={{
                    fontSize: fontSize.btnTxt,
                    color: themeColor.btnTxtColor,
                  }}>
                  Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* center side */}
        <View
          style={{
            width: screenSize.wrapperWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontSize.title,
              marginVertical: 10,
              alignSelf: 'flex-start',
              color: themeColor.titleColor,
            }}>
            Select E-Rickshaw
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: themeColor.bgCard,
              height: 150,
              alignItems: 'center',
              padding: 5,
              borderRadius: 20,
              width: screenSize.wrapperWidth,
              justifyContent: 'space-evenly',
              elevation: 2,
            }}>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: fontSize.title,
                  fontWeight: fontSize.bold,
                  color: themeColor.titleColor,
                }}>
                Ride
              </Text>
              <Text style={{fontSize: fontSize.txt, color: 'gray'}}>
                Book E-Rickshaw on the go
              </Text>
            </View>
            <Image
              source={require('../../../assets/img/car.png')}
              style={{
                height: 110,
                width: 130,
                borderRadius: 20,
                marginLeft: 10,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: themeColor.userBtnBgColor,
              width: screenSize.btnWidth,
              marginVertical: screenSize.btnMarginVertical,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: screenSize.btnRadius,
              padding: screenSize.btnPadding,
              elevation: 3,
            }}
            onPress={() => navigation.navigate('SearchLocation')}>
            <Text
              style={{
                fontSize: fontSize.btnTxt,
                fontWeight: fontSize.bold,
                color: themeColor.bgCard,
              }}>
              Where to Go
            </Text>
          </TouchableOpacity>
        </View>
        {/* bottom  */}

        <View
          style={{
            flex: 1,
            width: screenSize.wrapperWidth,
            height: 200,
          }}>
          <Text
            style={{
              color: themeColor.titleColor,
              fontSize: fontSize.title,
            }}>
            Around You
          </Text>

          {/* <Map /> */}
          <MapView
            style={[StyleSheet.absoluteFill, {marginTop: 45}]}
            ref={mapRef}
            initialRegion={pickupCords}>
            <Marker coordinate={pickupCords} />
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    marginVertical: 10,
  },
  orderBtn: {
    backgroundColor: themeColor.btnBgColorTwo,
    width: 100,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
});

export default UserMainScreen;
