import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

class Home extends Component {
  
  static navigationOptions = {
    headerTitle: 'Lab BIS',
    headerTitleStyle: {
      color: '#0172BB'
    },
    headerRight: (
      <TouchableOpacity>
        <Icon name='send-o' type='FontAwesome' style={{color: '#0172BB', fontSize: 23, marginRight: 19}} />
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