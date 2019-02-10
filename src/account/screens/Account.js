import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import List from '../components/List';

class Account extends Component {

  static navigationOptions = {
    headerTitle: 'Account',
    headerTitleStyle: {
      color: '#fff'
    },
    headerStyle: {
      backgroundColor: '#3498DB' 
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.containerImage}>
              <Image
                source={{uri: 'https://lh3.googleusercontent.com/a-/AAuE7mBPLyzzuOx0NFjGW6wD4InDi6aR4KWhpw3sxvgfdg=s640-rw-il'}}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={styles.detailProfileContainer}>
              <Text style={styles.name}>Arief Yusron</Text>
              <Text style={styles.detail}>160441100023</Text>
              <Text style={styles.detail}>Fakultas Teknik</Text>
              <Text style={styles.detail}>Sistem Informasi</Text>
              <Text style={styles.detail}>2016</Text>
            </View>
          </View>
          <List navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flex: 1
  },
  scrollView: {
    paddingHorizontal: 12
  },
  row: {
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 19,
    paddingVertical: 19,
    flexDirection: 'row',
    marginBottom: 24,
    marginTop: 12
  },
  detailProfileContainer: {
    marginLeft: 18
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 5
  },
  name: {
    color: '#000',
    fontSize: 18,
    fontWeight: '300'
  },
  detail: {
    color: '#777777',
    fontSize: 12,
    fontWeight: '200'
  },
  containerImage: {
    justifyContent: 'center'
  }
})

export default Account;