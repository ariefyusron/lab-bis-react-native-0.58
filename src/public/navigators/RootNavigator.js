import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import Login from '../../auth/screens/Login';
import Account from '../../account/screens/Account';
import Class from '../../class/screens/Class';
import Home from '../../home/screens/Home';

const tabNavigator = createMaterialTopTabNavigator({
  Home,
  Class,
  Account
})

const stackNavigator = createStackNavigator({
  Login,
  tabNavigator
},{
  headerMode: 'none'
})

export default createAppContainer(stackNavigator);