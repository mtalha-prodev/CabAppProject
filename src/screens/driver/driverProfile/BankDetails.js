import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import {fontSize, screenSize, themeColor} from '../../../constant';

const Card = ({type, text}) => {
  return (
    <View
      style={{
        paddingLeft: 20,
        marginVertical: 10,
        borderBottomWidth: 0.01,
        elevation: 1,
        padding: 10,
        backgroundColor: themeColor.bgCard,
      }}>
      <Text style={style.txt}>{type}</Text>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

const BankDetails = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader
        iconColor={themeColor.driverIconColor}
        title={'Add Bank Account'}
      />
      <Text style={style.title}>Add details</Text>
      <ScrollView>
        {/* bank detail */}
        <Card type={'Business Type'} text={'Indivisual'} />
        <Card type={'Account Holder Name'} text={'MTS'} />
        <Card type={'Address'} text={'LAHORE'} />
        <Card type={'Nationality'} text={'PAKISTANI'} />
        <Card type={'Phone Number'} text={'030000000'} />
        <Card type={'ID Card Number'} text={'99002993930'} />
        <Card type={'Bank Name'} text={'JS BANK'} />
        <Card type={'IBAN Number'} text={'99900099900'} />
        <Card type={'Bank Account number'} text={'000990009990099'} />

        <TouchableOpacity style={style.btn}>
          <Text style={style.btnTxt}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  title: {
    fontSize: fontSize.normalTitle,
    color: themeColor.titleColor,
    marginVertical: screenSize.textMargin,
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
    fontWeight: fontSize.bold,
  },
  txt: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
  },
  text: {
    color: themeColor.titleColor,
    fontSize: fontSize.btnTxt,
  },
  btn: {
    padding: screenSize.btnPadding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.driverBtnBgColor,
    marginVertical: screenSize.btnMarginVertical,
    width: screenSize.btnWidth,
    borderRadius: screenSize.btnRadius,
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    color: themeColor.bgCard,
  },
});

export default BankDetails;
