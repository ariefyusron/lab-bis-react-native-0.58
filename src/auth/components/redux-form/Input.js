import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {

  render() {
    const { input, placeholder, secureTextEntry, returnKeyType, keyboardType } = this.props
  
    return (
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#9A9A9A'
        secureTextEntry = {secureTextEntry || false}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType || 'default'}
        style={styles.input}
        onChangeText={input.onChange}
        value={input.value}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 42,
    marginBottom: 11,
    borderRadius: 5,
    backgroundColor: '#ffff',
    paddingHorizontal: 13,
    fontSize: 16
  }
})

export default Input;