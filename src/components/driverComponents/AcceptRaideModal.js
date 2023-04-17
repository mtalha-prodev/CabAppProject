import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {fontSize, screenSize, themeColor} from '../../constant';

const AcceptRaideModal = ({setModalVisible, modalVisible}) => {
  const [accept, setAccept] = useState(true);
  const [pickupPoint, setPickupPoint] = useState(false);
  const [confirmRaide, setConfirmRaide] = useState(false);
  const [endRaide, setEndRaide] = useState(false);
  const [reached, setReached] = useState(false);

  const acceptRaide = () => {
    setAccept(false);
    setPickupPoint(true);
  };
  const pickup = () => {
    setPickupPoint(false);
    setConfirmRaide(true);
  };
  const confirmArraival = () => {
    setConfirmRaide(false);
    setEndRaide(true);
  };
  const endTrips = () => {
    setEndRaide(false);
    setReached(true);
  };
  const reachLocation = () => {
    setReached(false);
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      {/* accept or reject modal */}
      {accept && (
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
              <Text>You have 15 Second to accept the ride</Text>
            </View>
            <View style={style.modalView}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '100%',
                }}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202',
                  }}
                  style={{width: 100, height: 100, borderRadius: 50}}
                />
                <View>
                  <Text style={{color: themeColor.txtColor}}>
                    Passenger Info
                  </Text>
                  <Text
                    style={{
                      color: themeColor.titleColor,
                      fontSize: fontSize.normalTitle,
                    }}>
                    Karla Oskar
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text style={{color: themeColor.txtColor}}>
                        Ride Info
                      </Text>
                      <Text style={{color: themeColor.titleColor}}>
                        RAIDO E-Rickshaw
                      </Text>
                    </View>
                    <Image
                      source={{
                        uri: 'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7',
                      }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        marginLeft: 20,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flex: 1,
                  width: screenSize.wrapperWidth,
                }}>
                <TouchableOpacity
                  style={{
                    width: '60%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: themeColor.driverBtnBgColor,
                    padding: screenSize.btnPadding,
                    borderRadius: screenSize.btnRadius,
                    marginTop: 10,
                  }}
                  onPress={() => acceptRaide()}>
                  <Text style={{color: themeColor.white}}>Continouse</Text>
                </TouchableOpacity>

                {/* reject Ride */}
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: themeColor.bgColorOne,
                    padding: screenSize.btnPadding,
                    borderRadius: screenSize.btnRadius,
                    marginTop: 10,
                    width: 90,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{color: themeColor.white}}>Reject</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
      {/* pickup modal */}

      {pickupPoint && (
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
                height: 50,
                width: '100%',
                justifyContent: 'center',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: themeColor.titleColor,
                  fontSize: fontSize.normalTitle,
                }}>
                Meet at the pickup point
              </Text>
            </View>
            <View style={style.modalView}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '100%',
                }}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202',
                  }}
                  style={{width: 100, height: 100, borderRadius: 50}}
                />
                <View>
                  <Text style={{color: themeColor.txtColor}}>
                    Passenger Info
                  </Text>
                  <Text
                    style={{
                      color: themeColor.titleColor,
                      fontSize: fontSize.normalTitle,
                    }}>
                    Karla Oskar
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text style={{color: themeColor.txtColor}}>
                        Ride Info
                      </Text>
                      <Text style={{color: themeColor.titleColor}}>
                        RAIDO E-Rickshaw
                      </Text>
                    </View>
                    <Image
                      source={{
                        uri: 'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7',
                      }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        marginLeft: 20,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flex: 1,
                  width: screenSize.wrapperWidth,
                }}>
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
                  onPress={() => pickup()}>
                  <Text style={{color: themeColor.white}}>
                    Arraived for Pickup
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}

      {/* conform for final */}
      {confirmRaide && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              top: '50%',
              backgroundColor: 'white',
              justifyContent: 'center',
              borderRadius: 20,
              width: screenSize.wrapperWidth,
              alignSelf: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: fontSize.title,
                color: themeColor.titleColor,
                borderBottomWidth: 1,
                borderBottomColor: themeColor.txtColor,
                paddingVertical: 5,
              }}>
              Confirm your arrival
            </Text>
            <Text
              style={{
                fontSize: fontSize.txt,
                color: themeColor.txtColor,
                paddingVertical: 5,
              }}>
              Make Shure you have reach the location
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: themeColor.driverBtnBgColor,
                padding: screenSize.btnPadding,
                borderRadius: screenSize.btnRadius,
                marginTop: 10,
                height: 40,
              }}
              onPress={() => confirmArraival()}>
              <Text style={{color: themeColor.white}}>Confirm Arraival</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: themeColor.bgColorOne,
                padding: screenSize.btnPadding,
                borderRadius: screenSize.btnRadius,
                height: 40,
                marginTop: 10,
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{color: themeColor.white}}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}

      {/* end raide */}
      {endRaide && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              bottom: 0,
              justifyContent: 'center',
              borderRadius: 20,
              width: screenSize.wrapperWidth,
              alignSelf: 'center',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: themeColor.driverBtnBgColor,
                padding: screenSize.btnPadding,
                borderRadius: screenSize.btnRadius,
                marginTop: 10,
                height: 40,
              }}
              onPress={() => endTrips()}>
              <Text style={{color: themeColor.white}}>End Trips</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
      {/* Reached  */}
      {reached && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              top: '50%',
              backgroundColor: 'white',
              justifyContent: 'center',
              borderRadius: 20,
              width: screenSize.wrapperWidth,
              alignSelf: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: fontSize.txt,
                color: themeColor.txtColor,
                paddingVertical: 5,
              }}>
              Make Shure you have reach the location
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: themeColor.driverBtnBgColor,
                padding: screenSize.btnPadding,
                borderRadius: screenSize.btnRadius,
                marginTop: 10,
                height: 40,
              }}
              onPress={() => reachLocation()}>
              <Text style={{color: themeColor.white}}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: themeColor.bgColorOne,
                padding: screenSize.btnPadding,
                borderRadius: screenSize.btnRadius,
                height: 40,
                marginTop: 10,
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{color: themeColor.white}}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
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
});

export default AcceptRaideModal;
