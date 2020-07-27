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
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE, Marker, Circle, Callout } from 'react-native-maps'
import { customMapStyle } from "./MapStyle";
import SafeAreaView from 'react-native-safe-area-view';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CustomMarkerDriver from "../../components/CustomMarkerDriver";





const markerCustom = {
  coordinate: {
    latitude: 10.7380628,
    longitude: 106.7151947,
  },
  image: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/39807922_117240419220780_7597910125738721280_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_oc=AQntmrpmjHJ6DkYz40QAR7HcikC2a4l3-s8mr2XVDLMUax24pHUg7gILT9aNdTrjHX4&_nc_ht=scontent.fdad3-1.fna&oh=6d49d0109aff6601d9f6b960727b1cee&oe=5F28C197'
}


class HomeTab extends Component {

  state = {
    statusPointColor: 'gray',
    status: 'OFFLINE'
  }

  onOffStatus = () => {
    if (this.state.status === 'OFFLINE' && this.state.statusPointColor === 'gray') {
      this.setState({ status: 'ONLINE', statusPointColor: 'green' })
    } else this.setState({ status: 'OFFLINE', statusPointColor: 'gray' })
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.titleHeader}>Home</Text>
          <TouchableOpacity style={styles.checkInButtonStyle} onPress={() => this.onOffStatus()}>
            <View style={[{ backgroundColor: this.state.statusPointColor }, styles.statusPointStyle]} />
            <Text>{this.state.status}</Text>
          </TouchableOpacity>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          region={{
            latitude: 10.7380628,
            longitude: 106.7151947,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}>
          <CustomMarkerDriver markerDto={markerCustom} />
          <Circle center={{ latitude: 10.7380628, longitude: 106.7151947 }} radius={1500} strokeColor="#50FFFFFF" />
          
        </MapView>
      </SafeAreaView>
    )
  }

};

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
  titleHeader: {
    marginLeft: 10,
    fontSize: 18
  },
  headerContainerStyle: {
    height: 48,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkInButtonStyle: {
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 3,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2
  },
  statusPointStyle: {
    aspectRatio: 1 / 1,
    marginHorizontal: 10,
    borderRadius: 50,
    height: 11
  }
});


export default HomeTab;
