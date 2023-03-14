import {View, Text, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {GOOGLE_MAPS_APIKEY} from '../utils';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
  const [location, setLocation] = useState({
    pickupCords: {
      latitude: 31.4545,
      longitude: 74.351,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCords: {
      latitude: 31.4758,
      longitude: 74.3426,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const mapRef = useRef();

  const {pickupCords, dropLocationCords} = location;

  return (
    <MapView
      style={StyleSheet.absoluteFill}
      ref={mapRef}
      initialRegion={pickupCords}>
      <Marker coordinate={pickupCords} />
      {/* <Marker coordinate={dropLocationCords} /> */}
      <MapViewDirections
        origin={pickupCords}
        destination={dropLocationCords}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="red"
        optimizeWaypoints={true}
        // splitWaypoints={true}
        onReady={result => {
          mapRef.current?.fitToCoordinates(result.coordinates, {
            edgePadding: {
              right: 30,
              bottom: 100,
              right: 30,
              top: 70,
            },
          });
        }}
      />
    </MapView>
  );
};

export default Map;
