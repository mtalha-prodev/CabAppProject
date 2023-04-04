import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {screenSize, themeColor} from '../constant';

const PriceCard = ({vehicle, price, time}) => {
  return (
    <View style={style.container}>
      <Image source={require('../assets/img/car.png')} style={style.img} />
      <View>
        <View style={style.cardBody}>
          <Text style={[style.text, {color: themeColor.titleColor}]}>
            {vehicle}
          </Text>
          <Text style={[style.text, {color: themeColor.titleColor}]}>
            RS: {price}
          </Text>
        </View>
        <Text style={style.text}>12:33pm . {time} min Away 6 may 2022 </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: screenSize.wrapperWidth,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 2,
    marginVertical: 7,
    borderRadius: 15,
  },
  img: {
    width: 80,
    height: 60,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  text: {
    color: themeColor.txtColor,
  },
});

export default PriceCard;
