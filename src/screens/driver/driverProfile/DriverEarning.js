import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import UserProfileHeader from '../../../components/UserProfileHeader';
import {fontSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DriverEarning = () => {
  return (
    <View style={style.container}>
      <UserProfileHeader title={'Earnings'} />

      <View style={style.body}>
        <Text style={{color: themeColor.txtColor}}>May 23-2022</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={style.normalTiltle}>Total Cash</Text>
          <Text style={style.normalTiltle}>RS 70,805</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 25,
          justifyContent: 'space-between',
        }}>
        <Card icon="star-outline" title="Rating " text="100%" />
        <Card icon="timer-outline" title="Available Hours " text="00:00:00" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 25,
          justifyContent: 'space-between',
        }}>
        <Card icon="compass-outline" title="Acceptance Rate " text="100%" />
        <Card
          icon="checkmark-done-outline"
          title="Ride Completion"
          text="100%"
        />
      </View>
      <View
        style={{
          marginVertical: 20,
          paddingHorizontal: 15,
          paddingBottom: 20,
          backgroundColor: themeColor.bgCard,
          width: '80%',
          alignSelf: 'center',
          borderRadius: 20,
        }}>
        <Cash title="Cash Trips" text="0.0" />
        <Cash title="Credit Trips " text="0.0" />
        <Cash title="Bonu" text="0.0" />
        <Cash title="Passenger Cancel " text="0.0" />
        <Cash title="Driver Cancel" text="0.0" />
        <Cash title="Tex" text="0.0" />
      </View>
      <View style={{width: '80%', alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: fontSize.normalTitle,
            color: themeColor.titleColor,
          }}>
          Invite someone
        </Text>
        <Text
          style={{
            fontSize: fontSize.txt,
            color: themeColor.txtColor,
          }}>
          Make up to PKR 1,000 for each new Driver for you Invite who completes
          50 trips. Terms apply{' '}
        </Text>
      </View>
    </View>
  );
};

const Card = ({title, text, icon}) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: themeColor.bgCard,
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        margin: 7,
      }}>
      <Ionicons name={icon} style={style.icon} />
      <View>
        <Text style={{color: themeColor.txtColor}}>{text}</Text>
        <Text style={{color: themeColor.txtColor}}>{title}</Text>
      </View>
    </View>
  );
};

const Cash = ({title, text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderColor: themeColor.bgColor,
      }}>
      <Text style={style.text}>{title}</Text>
      <Text style={style.text}>RS {text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
  },
  body: {
    paddingHorizontal: 30,
    marginVertical: 20,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: themeColor.bgColor,
  },
  normalTiltle: {
    color: themeColor.titleColor,
    fontSize: fontSize.normalTitle,
  },
  icon: {
    color: themeColor.iconColor,
    marginRight: 10,
    backgroundColor: themeColor.btnBgColorTwo,
    padding: 5,
    paddingHorizontal: 6,
    borderRadius: 100,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
  },
});

export default DriverEarning;
