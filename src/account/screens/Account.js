import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Account extends Component {

  static navigationOptions = {
    headerTitle: 'Account',
    headerTitleStyle: {
      color: '#0172BB'
    }
  }

  render() {
    return (
      <View>
        <Text>Account</Text>
      </View>
    );
  }
}

export default Account;