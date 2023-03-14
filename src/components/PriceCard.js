import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const PriceCard = () => {
  return (
    <View style={style.container}>
      <Image source={require('../assets/img/car.png')} style={style.img} />
      <View>
        <View style={style.cardBody}>
          <Text>Raido E-Rickshaw</Text>
          <Text>RS: 450</Text>
        </View>
        <Text>12:33pm . 5 min Away 6 may 2022 </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    // marginVertical: 2,
    elevation: 4,
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
});

export default PriceCard;
