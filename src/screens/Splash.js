import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {themeColor} from '../constant';

const Splash = () => {
  const {bgColorOne, bgColor, bgColorTwo, txtColor} = themeColor;
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }, []);

  return (
    <LinearGradient
      colors={[bgColorTwo, bgColorOne, bgColor]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      locations={[0.02, 0.6, 1]}
      style={style.container}>
      <Text
        style={{
          color: txtColor,
          fontSize: 45,
          fontWeight: 'bold',
        }}>
        RAIDO
      </Text>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
