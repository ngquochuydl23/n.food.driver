
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Colors
} from 'react-native';

import Mainscreen from "./src/Mainscreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import SplashScreen from 'react-native-splash-screen';

const Tab = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: false
    }
  }
  render() {
    SplashScreen.hide()
    const devideWindow = Dimensions.get('window');
    return (
      <SafeAreaProvider style={{ height: devideWindow.height }}>
        <StatusBar backgroundColor='whitesmoke' barStyle="dark-content"  />
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Mainscreen" headerMode="none">
            <Tab.Screen name="Mainscreen" component={Mainscreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
};

const styles = StyleSheet.create({

});

export default App;
