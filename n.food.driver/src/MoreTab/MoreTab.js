
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Colors,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



class MoreTab extends Component {
  state = {
    avatarUser: null,
    nameUser: null
  }

  componentDidMount() {
    const img = 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/39807922_117240419220780_7597910125738721280_o.jpg?_nc_cat=102&_nc_sid=174925&_nc_oc=AQntmrpmjHJ6DkYz40QAR7HcikC2a4l3-s8mr2XVDLMUax24pHUg7gILT9aNdTrjHX4&_nc_ht=scontent.fdad3-1.fna&oh=6d49d0109aff6601d9f6b960727b1cee&oe=5F28C197'
    this.setState({ avatarUser: img, nameUser: 'Vũ Hoàng Uyên Nhi' })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.titleHeader}>More</Text>
        </View>
        <ScrollView>
          <TouchableOpacity style={styles.avatarContainer}>
            <Image
              style={styles.avatarStyle}
              source={{ uri: this.state.avatarUser }} />
            <View style={{ height: '70%' }}>
              <Text style={styles.nameUserStyle}>{this.state.nameUser}</Text>
              <Text style={styles.idDriverStyle}>ID : 220903</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  titleHeader: {
    marginLeft: 10,
    fontFamily: 'sf_ui_display_regular',
    fontSize: 18
  },
  headerContainerStyle: {
    height: 48,
    backgroundColor: 'white',
    justifyContent: 'center',

  },
  avatarContainer: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2
  },
  avatarStyle: {
    height: 70,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    marginHorizontal: 10
  },
  nameUserStyle: {
    color: 'black',
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'sf_ui_display_regular',
  },
  idDriverStyle: {
    fontSize: 15,
    marginTop: 3,
    fontFamily: 'sf_ui_display_regular',
    color: 'gray'
  }
});

export default MoreTab;
