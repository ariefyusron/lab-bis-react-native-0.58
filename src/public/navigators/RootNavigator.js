import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../../auth/screens/Login';
import Contact from '../../contact/screens/Contact';

const switchNavigator = createSwitchNavigator({
  Login,
  Contact
})

export default createAppContainer(switchNavigator);