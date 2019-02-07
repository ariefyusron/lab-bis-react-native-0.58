import React from 'react';
import { Form, Col, Row, Button, Text } from 'native-base';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import TextInput from './redux-form/TextInput';
import { addContact } from '../../public/redux/actions/contact';

const FormAddContact = (props) => {

  handleAddContact = (values) => {
    props.dispatch(addContact(values))
    props.dispatch(reset('addContact'))
  }

  return(
    <Form>
      <Row>
        <Col style={{flex:4}}>
          <Field
            name='name'
            placeholder='Type Contact Name to Add'
            component={TextInput}
          />
        </Col>
        <Col style={{justifyContent:'center',flex:1}}>
          <Button primary onPress={props.handleSubmit(handleAddContact)} style={{alignSelf:'center'}}>
            <Text>Add</Text>
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default reduxForm({form:'addContact'})(connect()(FormAddContact));