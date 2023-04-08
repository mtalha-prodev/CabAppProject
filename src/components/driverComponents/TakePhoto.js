import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import BackButton from '../BackButton';
import {driverContent} from '../../screens/ComanScreens/DriverContent';
import {fontSize, screenSize, themeColor} from '../../constant';

const CnicPhoto = ({title, text, handlePhoto, vehicleForm}) => {
  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverIconColor} />
      <ScrollView style={{flex: 1, marginVertical: 20}}>
        <View style={style.content}>
          <View>
            <Text style={style.title}>{title}</Text>
            <Text style={style.text}>{text}</Text>
          </View>
          {/* only show in vehicle registration form */}
          {vehicleForm && (
            <View style={{marginBottom: 20}}>
              <Text style={style.title}>{vehicleForm}</Text>
              <TextInput
                style={style.input}
                placeholderTextColor={themeColor.txtColor}
                placeholder="Vehicle Name"
              />
              <TextInput
                style={style.input}
                placeholderTextColor={themeColor.txtColor}
                placeholder="Vehicle Model"
              />
              <TextInput
                style={style.input}
                placeholderTextColor={themeColor.txtColor}
                placeholder="Vehicle Number"
              />
              <TextInput
                style={style.input}
                placeholderTextColor={themeColor.txtColor}
                placeholder="Vehicle Model Year"
              />
            </View>
          )}

          <View>
            <Image
              source={require('../../assets/img/bgimg.jpg')}
              style={style.img}
            />
            <Text style={{color: themeColor.txtColor, marginVertical: 20}}>
              {driverContent.cardTxt}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={style.btn} onPress={() => handlePhoto()}>
          <Text style={style.btnTxt}>Take Photo</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
  },

  input: {
    paddingVertical: screenSize.inputPadding,
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    paddingHorizontal: 10,
    marginVertical: screenSize.inputMarginVertical,
    borderBottomWidth: 2,
    borderBottomColor: themeColor.driverBorderColor,
  },

  img: {height: 230, width: '100%', borderRadius: 15},
  title: {
    color: themeColor.titleColor,
    fontSize: fontSize.normalTitle,
  },
  text: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    textAlign: 'justify',
    marginVertical: 10,
  },
  btn: {
    backgroundColor: themeColor.driverBtnBgColor,
    padding: screenSize.btnPadding,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: screenSize.btnRadius,
    elevation: 2,
    marginVertical: screenSize.btnMarginVertical,
    width: screenSize.btnWidth,
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    color: themeColor.bgCard,
    fontWeight: fontSize.bold,
  },
});

export default CnicPhoto;
