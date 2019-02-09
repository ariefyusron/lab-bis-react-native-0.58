import React, { Component } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import FormLogin from '../components/FormLogin';

class Login extends Component {

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior='padding' style={styles.container} enabled>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/img/logo.png')}
              style={styles.logo}
            />
          </View>
          <View>
            <FormLogin navigation={this.props.navigation} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498DB'
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  logo: {
    width: 170,
    height: 170
  }
})

export default Login;