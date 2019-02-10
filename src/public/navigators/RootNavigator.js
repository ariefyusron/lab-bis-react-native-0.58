import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { Icon, Text } from 'native-base';

import Login from '../../auth/screens/Login';
import Account from '../../account/screens/Account';
import Class from '../../class/screens/Class';
import Home from '../../home/screens/Home';

const tabNavigator = createMaterialTopTabNavigator({
  Home,
  Class,
  Account
},{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const { routeName } = navigation.state
      let iconName
      let typeIcon
      if(routeName === 'Home'){
        iconName = 'home'
      } else if(routeName === 'Class'){
        iconName = 'class'
        typeIcon = 'MaterialIcons'
      } else {
        iconName = 'person'
      }
      return <Icon name={iconName} type={typeIcon} style={{color: tintColor}} />
    },
    tabBarLabel: ({tintColor}) => {
      const { routeName } = navigation.state
      let title
      if(routeName === 'Home'){
        title = 'Home'
      } else if(routeName === 'Class'){
        title = 'Class'
      } else {
        title = 'Account'
      }
      return <Text style={{color: tintColor, fontSize: 11, fontWeight: 'normal'}}>{title}</Text>
    }
  }),
  tabBarPosition: 'bottom',
  lazy: true,
  swipeEnabled: false,
  tabBarOptions: {
    labelStyle: {
      marginBottom: 8,
      marginTop: 0
    },
    iconStyle: {
      marginTop: 8,
      marginBottom: 0
    },
    tabStyle: {
      height: 53
    },
    style: {
      backgroundColor: '#ffff'
    },
    indicatorStyle: {
      opacity: 0
    },
    showIcon: true,
    upperCaseLabel: false,
    activeTintColor: '#0172BB',
    inactiveTintColor: '#3B3B3B',
    pressColor: '#63A8D5'
  }
})

const stackNavigator = createStackNavigator({
  Login,
  tabNavigator
},{
  headerMode: 'none'
})

export default createAppContainer(stackNavigator);