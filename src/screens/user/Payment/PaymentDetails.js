import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {fontSize, screenSize, themeColor} from '../../../constant';
import VisaCard from '../../../components/VisaCard';
import {useNavigation} from '@react-navigation/native';
import UserProfileHeader from '../../../components/UserProfileHeader';

const PaymentDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      {/* profile header component */}
      <UserProfileHeader iconColor={themeColor.userIconColor} title="Payment" />
      <ScrollView>
        {/* linear gradient */}
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <VisaCard />

          {/* Card details */}
          <View style={style.cardBody}>
            <Text style={style.text}>Card Holder Name</Text>
            <Text style={style.text}>Card Number</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={style.text}>Expiry MM/YY</Text>
              <Text
                style={[
                  style.text,
                  {
                    borderBottomWidth: 1,
                    width: '50%',
                    borderColor: themeColor.txtColor,
                  },
                ]}>
                CVC
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={style.btn}
            onPress={() => navigation.navigate('PaymentEdit')}>
            <Text style={style.btnTxt}>Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: screenSize.containerPaddingVertical,
  },
  cardBody: {
    flex: 1,
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
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
  btnTxt: {
    fontSize: fontSize.btnTxt,
    color: themeColor.bgCard,
    fontWeight: fontSize.bold,
  },
});

export default PaymentDetails;
