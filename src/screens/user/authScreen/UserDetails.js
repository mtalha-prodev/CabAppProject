import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {userContent} from '../../ComanScreens/UserContent';
import {fontSize, screenSize, themeColor} from '../../../constant';
import BackButton from '../../../components/BackButton';
import * as Yup from 'yup';
import {useFormik} from 'formik';

const UserDetails = () => {
  const navigation = useNavigation();

  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validSchema = Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required('Name must be at least 3 characters long'),
    email: Yup.string().email().required('Enter valid email address'),
    password: Yup.string()
      .min(8)
      .required('Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], 'Password must match'),
  });

  const {handleSubmit, handleChange, handleBlur, errors, touched, values} =
    useFormik({
      initialValues: initialState,
      validationSchema: validSchema,
      onSubmit: value => handleDetails(value),
    });

  const handleDetails = value => {
    try {
      console.log(value);
      navigation.dispatch(StackActions.replace('UserMainScreen'));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.userIconColor} />
      <ScrollView>
        <View>
          <View style={{width: screenSize.wrapperWidth, alignSelf: 'center'}}>
            <Text style={style.title}>{userContent.detailTitle}</Text>
            <Text style={style.text}>{userContent.detailTxt}</Text>
            <View style={style.inputForm}>
              <Text style={style.label}>User Name</Text>
              <TextInput
                placeholder="Enter Name ..."
                style={style.inputText}
                placeholderTextColor={themeColor.txtColor}
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
                placeholder="Enter E-mail ..."
                style={style.inputText}
                placeholderTextColor={themeColor.txtColor}
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
                placeholder="Enter Password ..."
                style={style.inputText}
                placeholderTextColor={themeColor.txtColor}
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
              <Text style={style.label}>Confirm Password</Text>
              <TextInput
                placeholder="Confirm Password ..."
                style={style.inputText}
                placeholderTextColor={themeColor.txtColor}
                secureTextEntry={true}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
                onSubmitEditing={() => handleSubmit()}
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <Text style={{color: 'red', alignSelf: 'flex-end'}}>
                  {errors.confirmPassword}
                </Text>
              ) : null}
            </View>
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
    justifyContent: 'space-between',
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
    marginVertical: screenSize.inputMarginVertical,
  },
  label: {
    fontSize: fontSize.btnTxt,
    color: themeColor.titleColor,
    fontWeight: 'bold',
  },
  inputText: {
    borderBottomWidth: 2,
    width: screenSize.inputWidth,
    fontSize: fontSize.txt,
    borderBottomColor: themeColor.userBtnBgColor,
    color: themeColor.txtColor,
    padding: screenSize.inputPadding,
  },
  btn: {
    backgroundColor: themeColor.userBtnBgColor,
    width: screenSize.btnWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenSize.btnPadding,
    borderRadius: screenSize.btnRadius,
    alignSelf: 'center',
    marginTop: screenSize.btnTopMargin,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
    color: themeColor.btnTxtColor,
  },
});

export default UserDetails;
