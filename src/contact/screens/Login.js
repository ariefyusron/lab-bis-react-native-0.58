import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';

import FormLogin from '../components/FormLogin';

class Login extends Component {
  
  render() {
    const { navigation, contact} = this.props

    if(contact.isLogin){
      navigation.navigate('Contact')
    }

    return (
      <Container>
        <Content>
          <FormLogin />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contact
})

export default connect(mapStateToProps)(Login);