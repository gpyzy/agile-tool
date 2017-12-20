import { combineReducers } from 'redux';

import { default as loginReducers } from './Login';

const rootReducer = combineReducers({
  loginReducers
});

export default rootReducer;