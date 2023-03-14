import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '../utils';

const AddressPickup = ({placeholderText}) => {
  //   console.log(GOOGLE_MAPS_APIKEY);
  return (
    <View style={{flex: 1}}>
      <GooglePlacesAutocomplete
        placeholder={placeholderText}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.inputContainer,
          textInput: styles.textInput,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
  },
  textInput: {
    padding: 8,
    color: '#000',
    fontSize: 17,
    backgroundColor: '#f3f3f3',
  },
});

export default AddressPickup;
