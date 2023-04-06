import {View, StyleSheet} from 'react-native';
import React from 'react';
import BackButton from '../../../components/BackButton';
import Privacy from '../../../components/Privacy';
import {screenSize, themeColor} from '../../../constant';

const TermCondition = () => {
  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverIconColor} />
      <Privacy />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
});

export default TermCondition;
