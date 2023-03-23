import {View, StyleSheet} from 'react-native';
import React from 'react';
import BackButton from '../../../components/BackButton';
import Privacy from '../../../components/Privacy';

const TermCondition = () => {
  return (
    <View style={style.container}>
      <BackButton />
      <Privacy />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
  },
});

export default TermCondition;
