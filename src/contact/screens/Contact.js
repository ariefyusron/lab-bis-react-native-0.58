import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Text, ListItem, List } from 'native-base';
import { connect } from 'react-redux';

import FormAddContact from '../components/FormAddContact';

class Contact extends Component {
  
  render() {
    const { contact } = this.props
    const { contacts } = contact

    const renderItem = ({item}) => (
      <ListItem>
        <Text>{item}</Text>
      </ListItem>
    )

    return (
      <Container>
        <Content>
          <FormAddContact />
          <List>
            <FlatList
              data={contacts}
              keyExtractor={(item,index) => index.toString()}
              renderItem={renderItem}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contact
})

export default connect(mapStateToProps)(Contact);