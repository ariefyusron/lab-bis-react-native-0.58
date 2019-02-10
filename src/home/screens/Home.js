import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

class Home extends Component {
  
  static navigationOptions = {
    headerTitle: 'Lab Bis',
    headerTitleStyle: {
      color: '#ffffff'
    },
    headerStyle: {
      backgroundColor: '#3498DB' 
    },
    headerRight: (
      <TouchableOpacity>
        <Icon name='send-o' type='FontAwesome' style={{color: '#ffffff', fontSize: 23, marginRight: 19}} />
      </TouchableOpacity>
    )
  }
  
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

export default Home;