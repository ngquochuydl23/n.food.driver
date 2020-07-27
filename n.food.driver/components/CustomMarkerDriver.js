import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Switch,
  Animated,
  TouchableOpacity
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle, Callout } from 'react-native-maps'

export default function CustomMarkerDriver({markerDto}) {
  return (
    <MapView.Marker key={1} coordinate={markerDto.coordinate}>
      <Animated.View style={[styles.markerWrap]}>
        <Animated.Image
          source={{uri:markerDto.image}}
          style={styles.marker}
          resizeMode="cover"
        />
      </Animated.View>
    </MapView.Marker>
  )
}

const styles = StyleSheet.create({


  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
    borderRadius:100
  },

});