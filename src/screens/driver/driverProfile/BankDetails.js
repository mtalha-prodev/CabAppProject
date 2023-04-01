import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import {fontSize, themeColor} from '../../../constant';

const Card = ({type, text}) => {
  return (
    <View
      style={{
        paddingLeft: 30,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        padding: 10,
        borderColor: themeColor.bgColor,
      }}>
      <Text style={style.txt}>{type}</Text>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

const BankDetails = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader title={'Add Bank Account'} />
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
    paddingVertical: 25,
  },
  title: {
    fontSize: fontSize.normalTitle,
    color: themeColor.titleColor,
    marginLeft: 30,
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
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.btnBgColorTwo,
    marginVertical: 25,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    color: themeColor.bgCard,
  },
});

export default BankDetails;
