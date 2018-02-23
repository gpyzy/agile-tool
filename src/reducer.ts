import { combineReducers } from 'redux';

import { login } from './Login';
import { part2 } from './example/part2';
import { part3 } from './example/part3';

const rootReducer = combineReducers({
  login,
  part2,
  part3
});

export default rootReducer;