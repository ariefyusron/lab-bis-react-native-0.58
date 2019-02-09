import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Input from './redux-form/Input';

const FormLogin = ({navigation}) => {
  
  handleLogin = () => {
    navigation.navigate('tabNavigator')
  }

  return (
    <View style={styles.container}>
      <Field
        name='nim'
        placeholder='Nim'
        returnKeyType='next'
        keyboardType='numeric'
        component={Input}
      />
      <Field
        name='password'
        placeholder='Password'
        secureTextEntry={true}
        returnKeyType='go'
        component={Input}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.button}>Log in</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingBottom: 48,
    position: 'relative'
  },
  buttonContainer: {
    backgroundColor: '#0172BB',
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 10
  },
  button: {
    fontSize: 18,
    fontWeight: '500',
    color: '#DFEEFF',
    textAlign: 'center'
  }
})

export default reduxForm({form: 'login'})(connect()(FormLogin));