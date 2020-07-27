import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Colors
} from 'react-native';


export default function ItemPickUp({itemPickUpDto}) {
  return (
    <View style={styles.itemPickUp}>
      <Text style={{ fontSize: 18, color: 'black',fontFamily: 'sf_ui_display_regular' }}>{itemPickUpDto.restaurantName}</Text>
      <Text style={{ fontSize: 14, color: 'gray',fontFamily: 'sf_ui_display_regular'  }}>{itemPickUpDto.restaurantAddress}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  itemPickUp: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-evenly'
  }
})