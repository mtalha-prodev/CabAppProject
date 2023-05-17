import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {driverContent} from '../../ComanScreens/DriverContent';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/BackButton';

// use validataion
import {useFormik} from 'formik';
import * as Yup from 'yup';

const DriverPassword = () => {
  const {handleChange, handleSubmit, handleBlur, values, errors, touched} =
    useFormik({
      initialValues: {
        password: '',
      },
      validationSchema: Yup.object().shape({
        password: Yup.string()
          .min(8)
          .max(15)
          .required('Please enter must be at least 8 characters long'),
      }),
      onSubmit: value => handlePassword(value),
    });

  const navigation = useNavigation();

  const handlePassword = async value => {
    try {
      console.log(value);
      navigation.navigate('DriverDetails');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverIconColor} />
      <View style={{alignSelf: 'center'}}>
        <Text style={style.title}>{driverContent.phonePass}</Text>
        <Text style={style.text}>{driverContent.phonePassTxt}</Text>
        <View>
          <TextInput
            placeholder="Enter Password ..."
            style={style.inputText}
            placeholderTextColor={themeColor.inputTextColor}
            secureTextEntry={true}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            touched={touched.password}
            error={values.password}
            onSubmitEditing={() => handleSubmit()}
          />
          {touched.password && errors.password ? (
            <Text style={{color: 'red', alignSelf: 'flex-end'}}>
              {errors.password}
            </Text>
          ) : null}
        </View>
        <View>
          <TouchableOpacity style={style.btn} onPress={handleSubmit}>
            <Text style={style.btnTxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
    paddingHorizontal: screenSize.containerPaddingHorizontal,
  },
  title: {
    fontSize: fontSize.title,
    marginTop: screenSize.titleTopMargin,
    color: themeColor.titleColor,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: fontSize.txt,
    marginBottom: screenSize.textMargin,
    alignSelf: 'flex-start',
    color: themeColor.txtColor,
  },
  inputText: {
    borderBottomWidth: 3,
    marginVertical: screenSize.inputMarginVertical,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.driverIconColor,
    color: themeColor.txtColor,
  },
  btn: {
    backgroundColor: themeColor.driverBtnBgColor,
    width: screenSize.btnWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    marginTop: screenSize.btnTopMargin,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default DriverPassword;
