import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../../contact/screens/Login';
import Contact from '../../contact/screens/Contact';

const switchNavigator = createSwitchNavigator({
  Login: Login,
  Contact
})

export default createAppContainer(switchNavigator);