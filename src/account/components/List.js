import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

const List = ({navigation}) => {

  handleLogout = () => {
    navigation.navigate('Login')
  }

  return (
    <View>
      <TouchableOpacity style={styles.row}>
        <View style={styles.colLeft}>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.colRight}>
          <Icon name='chevron-small-right' type='Entypo' style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <View style={styles.colLeft}>
          <Text style={styles.title}>Security</Text>
        </View>
        <View style={styles.colRight}>
          <Icon name='chevron-small-right' type='Entypo' style={styles.icon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row} onPress={handleLogout}>
        <View style={styles.colLeft}>
          <Text style={styles.title}>Log out</Text>
        </View>
        <View style={styles.colRight}>
          <Icon name='chevron-small-right' type='Entypo' style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  row: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 9,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  colLeft: {
  },
  colRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    color: '#595959'
  },
  title: {
    fontSize: 18,
    color: '#000'
  },
})

export default List;