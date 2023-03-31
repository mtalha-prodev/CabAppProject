import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {fontSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../../components/BackButton';
import {useNavigation} from '@react-navigation/native';

const RequireSteps = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <BackButton />
      <View style={{marginLeft: 20}}>
        <Text style={style.title}>Welcome Davis</Text>
        <Text style={style.normalTxt}>Required Steps</Text>
        <Text style={style.text}>
          Here's what you need to do to see up your account.
        </Text>
      </View>

      <ScrollView style={{paddingBottom: 20}}>
        <CardButton
          name={'Terms and Condition'}
          fieldName={'Get Started'}
          onPress="DriverTerms"
        />
        <CardButton
          name={'CNIC Front Side '}
          fieldName={'Get Started'}
          onPress="FrontCnic"
        />
        <CardButton
          name={'CNIC Back Side'}
          fieldName={'Get Started'}
          onPress="BackCnic"
        />
        <CardButton
          name={'Partner Photo'}
          fieldName={'Get Started'}
          onPress="DriverPhoto"
        />
        <CardButton
          name={'Driving License Front Side'}
          fieldName={'Get Started'}
          onPress="LicenseFront"
        />
        <CardButton
          name={'Driving License Back Side'}
          fieldName={'Get Started'}
          onPress="LicenseBack"
        />
        <CardButton
          name={'Vehicle Registration Book/Card'}
          fieldName={'Get Started'}
          onPress="VehicleBook"
        />
        <TouchableOpacity
          style={style.btnNext}
          onPress={() => navigation.navigate('DriverApproval')}>
          <Text style={style.btnText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const CardButton = ({name, fieldName, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.btn}
      onPress={() => navigation.navigate(onPress)}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons style={style.icon} name="document-attach-outline" />
        <View style={{marginLeft: 20}}>
          <Text
            style={{
              color: themeColor.titleColor,
              fontSize: fontSize.txt,
              fontWeight: fontSize.bold,
            }}>
            {name}
          </Text>
          <Text style={{color: themeColor.txtColor}}>{fieldName}</Text>
        </View>
      </View>
      <Ionicons style={style.icon} name="chevron-forward-outline" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  title: {
    fontSize: fontSize.title,
    color: themeColor.titleColor,
    marginTop: 15,
  },
  normalTxt: {
    fontSize: fontSize.txt,
    color: themeColor.titleColor,
    fontWeight: fontSize.bold,
    marginVertical: 10,
  },
  text: {
    fontSize: fontSize.txt,
    color: themeColor.txtColor,
    marginBottom: 15,
  },

  btn: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: themeColor.btnTxtColor,
  },
  icon: {
    fontSize: 30,
    color: themeColor.iconColor,
  },
  btnNext: {
    width: '90%',
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.btnBgColor,
    borderRadius: 20,
    marginVertical: 20,
  },
  btnText: {
    color: themeColor.bgCard,
    fontSize: fontSize.btnTxt,
  },
});

export default RequireSteps;
