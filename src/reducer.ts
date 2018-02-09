import { combineReducers } from 'redux';

import { login } from './Login';
import { part2 } from './example/part2';

const rootReducer = combineReducers({
  login,
  part2
});

export default rootReducer;