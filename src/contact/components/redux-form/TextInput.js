import React, { Component } from 'react';
import { Input } from 'native-base';

class TextInput extends Component {
  
  render() {

    const { input, placeholder, secureTextEntry } = this.props

    return (
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry || false}
        onChangeText={input.onChange}
        value={input.value} 
      />
    );
  }
}

export default TextInput;