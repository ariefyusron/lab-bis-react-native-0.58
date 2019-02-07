import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/public/redux/store';
import RootNavigator from './src/public/navigators/RootNavigator';

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;