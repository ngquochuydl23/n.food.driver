import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import ItemPickup from '../Item/ItemPickup'

const DATA = [
  {
    id: '1',
    restaurantName: 'Gongcha Phú Mỹ Hưng',
    restaurantAddress: '175 Nguyễn Thị Thập, P.Tân Phong, Q.Tân Bình, TP.HCM ',
  },
  {
    id: '1',
    restaurantName: 'Gongcha Phú Mỹ Hưng',
    restaurantAddress: '175 Nguyễn Thị Thập, P.Tân Phong, Q.Tân Bình, TP.HCM ',
  },
  {
    id: '1',
    restaurantName: 'Gongcha Phú Mỹ Hưng',
    restaurantAddress: '175 Nguyễn Thị Thập, P.Tân Phong, Q.Tân Bình, TP.HCM ',
  },
  {
    id: '1',
    restaurantName: 'Gongcha Phú Mỹ Hưng',
    restaurantAddress: '175 Nguyễn Thị Thập, P.Tân Phong, Q.Tân Bình, TP.HCM ',
  }
]

export default class ReceiveTrip extends Component {
  render() {
    return (
      <View style={styles.containerStyles}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', }}>
          <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>Cost</Text>
          <Text style={{ color: 'black', fontSize: 20, margin: 10 }}>160.000đ</Text>
        </View>
        <View style={styles.childContainerStyles}>
          <Text style={{ color: 'gray', fontSize: 20, marginLeft: 10, fontFamily: 'sf_ui_display_regular' }}>Pickup</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) =>
              <ItemPickup
                itemPickUpDto={item} />}
            keyExtractor={item => item.id} />
        </View>
        <View style={[styles.childContainerStyles, { justifyContent: 'space-evenly' }]}>
          <Text style={{ color: 'gray', fontSize: 20, margin: 10, fontFamily: 'sf_ui_display_regular' }}>Delivery to</Text>
          <Text style={{ color: 'black', fontSize: 20, marginLeft: 10, fontFamily: 'sf_ui_display_regular' }}>59 Xô Viết Nghệ Tỉnh, P7 ,TP.Đà Lạt</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  containerStyles: {
    flex: 1
  },
  childContainerStyles: {
    backgroundColor: 'white',
    marginTop: 5,
  }
});