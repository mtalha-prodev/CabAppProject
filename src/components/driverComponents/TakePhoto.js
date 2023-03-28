import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import BackButton from '../BackButton';
import {driverContent} from '../../screens/ComanScreens/DriverContent';
import {fontSize, themeColor} from '../../constant';

const {width} = Dimensions.get('screen');
const CnicPhoto = ({title, text, handlePhoto, vehicleForm}) => {
  return (
    <View style={style.container}>
      <BackButton />
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

            <TouchableOpacity style={style.btn} onPress={() => handlePhoto()}>
              <Text style={style.btnTxt}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    width: width - 60,
    alignSelf: 'center',
    marginTop: 20,
  },

  input: {
    paddingVertical: 13,
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: themeColor.btnBgColor,
  },

  img: {height: 230, width: '100%', borderRadius: 25},
  title: {
    color: themeColor.titleColor,
    fontSize: fontSize.title,
  },
  text: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    textAlign: 'justify',
    marginVertical: 15,
  },
  btn: {
    backgroundColor: themeColor.btnBgColor,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 4,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
  },
});

export default CnicPhoto;
