import React from 'react';
import { Form, Row, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import TextInput from './redux-form/TextInput';
import { login } from '../../public/redux/actions/contact';

const FormLogin = (props) => {
  
  handleLogin = (value) => {
    props.dispatch(login(value))
  }

  return (
    <Form>
      <Row style={{width:96+'%',alignSelf:'center'}}>
        <Field
          name='name'
          placeholder='Insert Your Name'
          component={TextInput}
        />
      </Row>
      <Row style={{justifyContent:'center'}}>
        <Button primary onPress={props.handleSubmit(handleLogin)} style={{width:96+'%',justifyContent:'center'}}>
          <Text>Login</Text>
        </Button>
      </Row>
    </Form>
  )
};

export default reduxForm({form: 'login'})(connect()(FormLogin));