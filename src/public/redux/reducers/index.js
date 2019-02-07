import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import contactReducer from './contact';

const reducers = combineReducers({
  form: formReducer,
  contact: contactReducer
});

export default reducers;