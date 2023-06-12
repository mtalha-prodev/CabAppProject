import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fontSize, screenSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RequireSteps = () => {
  const [cnicFront, setCnicFront] = useState(false);
  const [cnicBack, setCnicBack] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [licenseFront, setLicenseFront] = useState(false);
  const [licenseBack, setlicenseBack] = useState(false);
  const [vehicleDocument, setvehicleDocument] = useState(false);

  const navigation = useNavigation();

  const getDriverData = async () => {
    try {
      const fCnic = await AsyncStorage.getItem('front-cnic');
      const bCnic = await AsyncStorage.getItem('back-cnic');
      const photo = await AsyncStorage.getItem('photo');
      const fLicense = await AsyncStorage.getItem('license-front');
      const bLicense = await AsyncStorage.getItem('license-back');
      const vehicleDocument = await AsyncStorage.getItem('vehicle-document');

      setCnicFront(JSON.parse(fCnic));
      setCnicBack(JSON.parse(bCnic));
      setPhoto(JSON.parse(photo));
      setLicenseFront(JSON.parse(fLicense));
      setlicenseBack(JSON.parse(bLicense));
      setvehicleDocument(JSON.parse(vehicleDocument));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(cnicFront);

  useEffect(() => {
    getDriverData();
  }, [getDriverData]);

  return (
    <View style={style.container}>
      <BackButton iconColor={themeColor.driverIconColor} />
      <View style={{marginLeft: 20}}>
        <Text style={style.title}>Welcome Davis</Text>
        <Text style={style.normalTxt}>Required Steps</Text>
        <Text style={style.text}>
          Here's what you need to do to see up your account.
        </Text>
      </View>

      <ScrollView style={{paddingBottom: 10}}>
        <CardButton
          name={'Terms and Condition'}
          fieldName={'Get Started'}
          onPress="DriverTerms"
        />
        <CardButton
          name={'CNIC Front Side '}
          fieldName={'Get Started'}
          onPress="FrontCnic"
          cardState={cnicFront}
        />
        <CardButton
          name={'CNIC Back Side'}
          fieldName={'Get Started'}
          onPress="BackCnic"
          cardState={cnicBack}
        />
        <CardButton
          name={'Partner Photo'}
          fieldName={'Get Started'}
          onPress="DriverPhoto"
          cardState={photo}
        />
        <CardButton
          name={'Driving License Front Side'}
          fieldName={'Get Started'}
          onPress="LicenseFront"
          cardState={licenseFront}
        />
        <CardButton
          name={'Driving License Back Side'}
          fieldName={'Get Started'}
          onPress="LicenseBack"
          cardState={licenseBack}
        />
        <CardButton
          name={'Vehicle Registration Book/Card'}
          fieldName={'Get Started'}
          onPress="VehicleBook"
          cardState={vehicleDocument}
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

const CardButton = ({name, fieldName, onPress, cardState}) => {
  const [state, setState] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    setState(cardState);
  }, [state]);

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
      {state ? (
        <Ionicons style={style.icon} name="checkmark-done-outline" />
      ) : (
        <Ionicons style={style.icon} name="chevron-forward-outline" />
      )}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  title: {
    fontSize: fontSize.title,
    color: themeColor.titleColor,
    marginTop: screenSize.titleTopMargin,
  },
  normalTxt: {
    fontSize: fontSize.txt,
    color: themeColor.titleColor,
    fontWeight: fontSize.bold,
  },
  text: {
    fontSize: fontSize.txt,
    color: themeColor.txtColor,
    marginBottom: 15,
  },

  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
    borderColor: themeColor.btnTxtColor,
    elevation: 1,
  },
  icon: {
    fontSize: 30,
    color: themeColor.driverIconColor,
  },
  btnNext: {
    width: screenSize.btnWidth,
    padding: screenSize.btnPadding,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: themeColor.driverBtnBgColor,
    borderRadius: screenSize.btnRadius,
    marginVertical: 20,
    fontWeight: fontSize.bold,
  },
  btnText: {
    color: themeColor.bgCard,
    fontSize: fontSize.btnTxt,
  },
});

export default RequireSteps;
