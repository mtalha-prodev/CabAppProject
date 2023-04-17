import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Map from '../../../components/Map';
import {fontSize, screenSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import AcceptRaideModal from '../../../components/driverComponents/AcceptRaideModal';

const DriverProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalVisible(true);
    }, 5000);
  }, []);

  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View
        style={{
          zIndex: 99,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {/* drawer burger */}
        <TouchableOpacity
          style={style.menu}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons
            name="reorder-two-outline"
            size={30}
            style={{color: '#000'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[style.btn, {backgroundColor: themeColor.driverBtnBgColor}]}>
          <Ionicons name={'close'} style={[style.icon, {marginRight: 10}]} />
          <Text style={style.btnText}>Online</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          style.btn,
          {
            backgroundColor: themeColor.bgColorOne,
          },
        ]}>
        <Text style={style.btnText}>Add Distination</Text>
        <Ionicons name={'location'} style={style.icon} />
      </TouchableOpacity>
      {/* map componets */}
      <Map />

      {/* modal */}

      <AcceptRaideModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </View>
  );
};
const style = {
  container: {
    flex: 1,
    paddingVertical: screenSize.containerPaddingVertical,
  },
  menu: {
    backgroundColor: 'orange',
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: screenSize.btnRadius,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 3,
    backgroundColor: themeColor.driverBtnBgColor,
    borderRadius: 25,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 20,
    zIndex: 99,
  },
  btnText: {
    fontSize: fontSize.txt,
  },
  icon: {
    color: '#fff',
    fontSize: 22,
  },
  //

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
};

export default DriverProfile;
