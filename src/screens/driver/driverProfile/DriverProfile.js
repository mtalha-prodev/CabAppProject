import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Map from '../../../components/Map';
import {fontSize, screenSize, themeColor} from '../../../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerActions, useNavigation} from '@react-navigation/native';

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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={style.centeredView}>
          <View
            style={{
              backgroundColor: themeColor.driverBorderColor,
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}>
            <Text>Text</Text>
          </View>
          <View style={style.modalView}>
            <View>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202',
                }}
                style={{width: 100, height: 100}}
              />
            </View>
            <TouchableOpacity
              style={{
                width: screenSize.btnWidth,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: themeColor.driverBtnBgColor,
                padding: screenSize.btnPadding,
                borderRadius: screenSize.btnRadius,
                marginTop: 10,
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{color: themeColor.white}}>Continouse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  modalView: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
  },
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
