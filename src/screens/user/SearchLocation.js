import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import AddressPickup from '../../components/AddressPickup';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import {fontSize, themeColor} from '../../constant';

const SearchLocation = () => {
  const navigation = useNavigation();

  const handleMapLocation = async () => {
    try {
      navigation.navigate('MapDirections');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <ScrollView keyboardShouldPersistTaps="handled" style={style.search}>
        <AddressPickup placeholderText={'Enter Pickup Location'} />
        <View style={{marginBottom: 15}}></View>
        <AddressPickup placeholderText={'Enter Destination Location'} />
        <TouchableOpacity style={style.btn} onPress={() => handleMapLocation()}>
          <Text style={style.btnTxt}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
  btn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: themeColor.btnBgColorTwo,
    padding: 10,
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: fontSize.btnTxt,
    fontWeight: fontSize.bold,
  },
});

export default SearchLocation;
