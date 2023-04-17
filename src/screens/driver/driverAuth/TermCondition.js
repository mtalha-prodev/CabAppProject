import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import BackButton from '../../../components/BackButton';
import Privacy from '../../../components/Privacy';
import {fontSize, screenSize, themeColor} from '../../../constant';

const TermCondition = () => {
  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverIconColor} />

      <Privacy />
      <TouchableOpacity style={style.btn}>
        <Text style={style.btnText}>Continoue</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  btn: {
    padding: screenSize.btnPadding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.driverBtnBgColor,
    width: screenSize.btnWidth,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: screenSize.btnRadius,
  },
  btnText: {
    fontSize: fontSize.btnTxt,
    color: themeColor.bgCard,
  },
});

export default TermCondition;
