
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Colors
} from 'react-native';

import HomeTab from './Homescreen/HomeTab'
import ReceiveTrip from "./ReceiveTrip/ReceiveTrip";
import NotificationTab from "./NotificationTab/NotificationTab";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MoreTab from "./MoreTab/MoreTab";
const Tab = createBottomTabNavigator();

class Mainscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator initialRouteName="HomeTab">
          <Tab.Screen name="HomeTab" component={HomeTab} />
          <Tab.Screen name="NotificationTab" component={NotificationTab} />
          <Tab.Screen name="MoreTab" component={MoreTab} />
        </Tab.Navigator>
      </View>
    )
  }
};

const styles = StyleSheet.create({

});

export default Mainscreen;
