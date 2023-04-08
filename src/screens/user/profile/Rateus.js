import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import {fontSize, screenSize, themeColor} from '../../../constant';

const Rateus = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader iconColor={themeColor.userIconColor} title="Rate Us" />
      <ScrollView>
        {/* user profile header */}
        {/*  section */}
        <View style={style.section}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../assets/img/car.png')}
              style={{width: 200, height: 150}}
            />
            <Image
              source={require('../../../assets/img/profile.jpg')}
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                position: 'absolute',
                left: 150,
              }}
            />
          </View>
          {/*  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginVertical: 10,
            }}>
            <Text style={style.stars}>5.0</Text>
            <Image
              source={require('../../../assets/img/stars.png')}
              style={{
                width: 170,
                height: 50,
                alignSelf: 'flex-end',
              }}
            />
          </View>

          <Text style={style.rateTxt}>Rate</Text>
          <View style={style.rateInput}>
            <Text
              style={{
                fontSize: fontSize.normalTitle,
                color: themeColor.titleColor,
              }}>
              Review (Optional)
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={style.btn}>
        <Text style={style.btnTxt}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: screenSize.containerPaddingVertical,
  },
  section: {
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
    marginVertical: 10,
  },
  stars: {
    alignSelf: 'flex-end',
    fontSize: fontSize.normalTitle,
    height: 40,
    textAlignVertical: 'center',
    color: 'orange',
  },
  rateTxt: {
    backgroundColor: themeColor.userBtnBgColor,
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    paddingLeft: 20,
    fontSize: fontSize.txt,
    color: themeColor.bgCard,
    width: screenSize.btnWidth,
  },
  rateInput: {
    backgroundColor: '#E9E9E9',
    height: 200,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  btn: {
    padding: screenSize.btnPadding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.userBtnBgColor,
    marginVertical: screenSize.btnMarginVertical,
    borderRadius: screenSize.btnRadius,
    width: screenSize.btnWidth,
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    color: themeColor.bgCard,
    fontWeight: fontSize.bold,
  },
});

export default Rateus;
