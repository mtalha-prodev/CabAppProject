import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import {driverContent} from '../../ComanScreens/DriverContent';
import {StackActions, useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/BackButton';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const DriverDetails = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [referralCode, setReferralCode] = useState('');
  // const [city, setCity] = useState('');

  const validSchema = Yup.object().shape({
    name: Yup.string().min(3).required('Please enter min 3 characters'),
    email: Yup.string().email().required('Please enter valid email'),
    password: Yup.string().min(8).required('Please enter min 8 characters'),
    referralCode: Yup.string()
      .min(4)
      .max(12)
      .required('Please enter min 4 & max 12 characters'),
    city: Yup.string().min(3).required('Please enter you city'),
  });

  const initailState = {
    name: '',
    email: '',
    password: '',
    referralCode: '',
    city: '',
  };

  const {handleChange, handleSubmit, handleBlur, errors, values, touched} =
    useFormik({
      initialValues: initailState,
      validationSchema: validSchema,
      onSubmit: value => handleDetails(value),
    });

  const navigation = useNavigation();

  const handleDetails = value => {
    try {
      console.log(value);
      navigation.navigate('SetAll');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverIconColor} />
      <ScrollView>
        <View style={style.wrapper}>
          <Text style={style.title}>{driverContent.detailTitle}</Text>
          <Text style={style.text}>{driverContent.detailTxt}</Text>
          <View style={style.inputForm}>
            <Text style={style.label}>User Name</Text>
            <TextInput
              placeholder="Enter Name ..."
              style={style.inputText}
              placeholderTextColor={themeColor.inputTextColor}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              touched={touched.name}
              error={errors.name}
              onSubmitEditing={() => handleSubmit()}
            />
            {touched.name && errors.name ? (
              <Text style={{color: 'red', alignSelf: 'flex-end'}}>
                {errors.name}
              </Text>
            ) : null}
          </View>
          <View style={style.inputForm}>
            <Text style={style.label}>Confirm E-mail</Text>
            <TextInput
              // value={email}
              placeholder="Enter E-mail ..."
              style={style.inputText}
              placeholderTextColor={themeColor.inputTextColor}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              touched={touched.email}
              error={errors.email}
              onSubmitEditing={() => handleSubmit()}
            />
            {touched.email && errors.email ? (
              <Text style={{color: 'red', alignSelf: 'flex-end'}}>
                {errors.email}
              </Text>
            ) : null}
          </View>
          <View style={style.inputForm}>
            <Text style={style.label}>Password</Text>
            <TextInput
              // value={password}
              placeholder="Enter Password ..."
              style={style.inputText}
              placeholderTextColor={themeColor.inputTextColor}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              touched={touched.password}
              error={errors.password}
              onSubmitEditing={() => handleSubmit()}
            />
            {touched.password && errors.password ? (
              <Text style={{color: 'red', alignSelf: 'flex-end'}}>
                {errors.password}
              </Text>
            ) : null}
          </View>
          <View style={style.inputForm}>
            <Text style={style.label}>Referral Code</Text>
            <TextInput
              // value={referralCode}
              placeholder="Enter Your referral code ..."
              placeholderTextColor={themeColor.inputTextColor}
              style={style.inputText}
              onChangeText={handleChange('referralCode')}
              onBlur={handleBlur('referralCode')}
              touched={touched.referralCode}
              error={errors.referralCode}
              onSubmitEditing={() => handleSubmit()}
            />
            {touched.referralCode && errors.referralCode ? (
              <Text style={{color: 'red', alignSelf: 'flex-end'}}>
                {errors.referralCode}
              </Text>
            ) : null}
          </View>
          <View style={style.inputForm}>
            <Text style={style.label}>Your City</Text>
            <TextInput
              // value={city}
              placeholder="Enter your City ..."
              placeholderTextColor={themeColor.inputTextColor}
              style={style.inputText}
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              touched={touched.city}
              error={errors.city}
              onSubmitEditing={() => handleSubmit()}
            />
            {touched.city && errors.city ? (
              <Text style={{color: 'red', alignSelf: 'flex-end'}}>
                {errors.city}
              </Text>
            ) : null}
          </View>
        </View>
        <View>
          <TouchableOpacity style={style.btn} onPress={() => handleSubmit()}>
            <Text style={style.btnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  wrapper: {
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
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
  inputForm: {
    marginBottom: 10,
  },
  inputText: {
    borderBottomWidth: 2,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.driverBorderColor,
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
    alignSelf: 'center',
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
  label: {
    fontSize: fontSize.btnTxt,
    color: themeColor.titleColor,
    fontWeight: 'bold',
  },
});

export default DriverDetails;
