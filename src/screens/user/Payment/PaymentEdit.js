import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import VisaCard from '../../../components/VisaCard';
import {fontSize, screenSize, themeColor} from '../../../constant';
import UserProfileHeader from '../../../components/UserProfileHeader';

const PaymentEdit = () => {
  return (
    <View style={style.container}>
      {/* profile header component */}
      <UserProfileHeader title="Payment" />

      <ScrollView>
        {/* linear gradient */}
        <VisaCard />

        {/* Card details */}
        <View style={style.cardBody}>
          <Text style={style.text}>Megan Susan</Text>
          <Text style={style.text}>5423-7865-7734-2034</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={style.text}>01-23</Text>
            <Text
              style={[
                style.text,
                {
                  borderBottomWidth: 1,
                  width: '50%',
                  borderColor: themeColor.txtColor,
                },
              ]}>
              969
            </Text>
          </View>
        </View>
        <TouchableOpacity style={style.btn}>
          <Text
            style={{
              fontSize: fontSize.btnTxt,
              color: themeColor.bgCard,
              fontWeight: fontSize.bold,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: screenSize.containerPaddingVertical,
  },

  text: {
    fontSize: fontSize.txt,
    color: themeColor.txtColor,
    marginVertical: screenSize.btnMarginVertical,
  },
  btn: {
    backgroundColor: themeColor.userBtnBgColor,
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenSize.btnWidth,
    alignSelf: 'center',
  },
  cardBody: {
    flex: 1,
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
    paddingVertical: 20,
    justifyContent: 'space-around',
  },
});

export default PaymentEdit;
