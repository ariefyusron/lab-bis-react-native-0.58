import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

class Class extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        {name: 'Praktikum Alpro C Praktikum Alpro C',members: '29 members'},
        {name: 'Praktikum Alpro A',members: '31 members'},
        {name: 'Praktikum Alpro B',members: '19 members'},
        {name: 'Praktikum Alpro D',members: '15 members'},
        {name: 'Praktikum Alpro E',members: '12 members'}
      ]
    }
  }

  static navigationOptions = {
    headerTitle: 'Class',
    headerTitleStyle: {
      color: '#fff'
    },
    headerStyle: {
      backgroundColor: '#3498DB' 
    },
    headerRight: (
      <TouchableOpacity>
        <Icon name='dots-three-horizontal' type='Entypo' style={{color: '#ffff', fontSize: 20, marginRight: 20}} />
      </TouchableOpacity>
    )
  }

  _renderListClass = ({item}) => (
    <TouchableOpacity style={styles.row}>
      <View style={styles.colLeft}>
        <Text style={styles.nameClass}>{item.name}</Text>
        <Text style={styles.memberCLass}>{item.members}</Text>
      </View>
      <View style={styles.colRight}>
        <Icon name='chevron-small-right' type='Entypo' style={styles.icon} />
      </View>
    </TouchableOpacity>
  )
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderListClass}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    padding: 12
  },
  row: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 9,
    paddingHorizontal: 15,
    paddingVertical: 9,
    flexDirection: 'row'
  },
  colRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  nameClass: {
    fontSize: 14,
    color: '#000'
  },
  memberCLass: {
    fontSize: 11,
    color: '#777777'
  },
  icon: {
    color: '#595959'
  }
})

export default Class;