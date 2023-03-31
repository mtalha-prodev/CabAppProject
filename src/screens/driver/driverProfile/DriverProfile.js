import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Map from '../../../components/Map';
import {fontSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const DriverProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      {/* <View style={{zIndex: 999}}> */}
      {/* <DrawerNavigation /> */}
      {/* </View> */}

      <View
        style={{
          zIndex: 99,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={style.menu}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons
            name="reorder-two-outline"
            size={30}
            style={{color: '#000'}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={[style.btn, {}]}>
          <Ionicons name={'close'} style={[style.icon, {marginRight: 10}]} />
          <Text style={style.btnText}>Online</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          style.btn,
          {
            backgroundColor: themeColor.btnBgColorTwo,
          },
        ]}>
        <Text style={style.btnText}>Add Distination</Text>
        <Ionicons name={'location'} style={style.icon} />
      </TouchableOpacity>
      {/* map componets */}
      <Map />
    </View>
  );
};
const style = {
  container: {
    flex: 1,
  },
  menu: {
    backgroundColor: 'orange',
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 50,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: themeColor.btnBgColor,
    borderRadius: 25,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 30,
    marginRight: 35,
    zIndex: 99,
  },
  btnText: {
    fontSize: fontSize.txt,
  },
  icon: {
    color: '#fff',
    fontSize: 22,
  },
};

export default DriverProfile;
