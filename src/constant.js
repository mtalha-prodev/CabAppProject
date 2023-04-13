import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const themeColor = {
  bgColor: '#ccd0f6',
  bgColorOne: '#92b2fd',
  bgColorTwo: '#ad7ffb',
  // button bg color
  userBtnBgColor: '#ad7ffb',
  userBorderColor: '#ad7ffb',
  driverBtnBgColor: '#f594b7',
  driverBorderColor: '#f594b7',
  bgCard: '#EDEDED',
  // text color
  txtColor: 'gray',
  // btn text color
  btnTxtColor: '#fff',
  titleColor: '#000',
  // icon colors
  driverIconColor: '#f594b7',
  userIconColor: '#ad7ffb',
  inputTextColor: 'gray',
  white: '#fff',
};
export const fontSize = {
  title: 24,
  normalTitle: 20,
  txt: 15,
  btnTxt: 16,
  bold: 600,
};

export const screenSize = {
  containerPaddingHorizontal: 10,
  containerPaddingVertical: 15,
  wrapperWidth: width - 40,
  // input
  inputWidth: width - 40,
  inputPadding: 8,
  inputMarginVertical: 7,
  // btn
  btnPadding: 7,
  btnMarginVertical: 10,
  btnWidth: width - 40,
  btnRadius: 50,
  btnTopMargin: 60,

  imgRadius: 25,
  // top margin
  topMargin: 25,
  // title text
  titleTopMargin: 20,
  textMargin: 10,
};
