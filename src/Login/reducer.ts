import { handleActions, Action } from 'redux-actions';
import { UserInfo } from './model';
import { LOGIN_COMPLETE, LOGIN_REDIRECT } from './constants/ActionTypes';

const initialState: UserInfo = {
  displayName: '',
  token: ''
};

const login = handleActions<UserInfo, UserInfo>(
  {
    [LOGIN_COMPLETE]: (userInfo: UserInfo, action: Action<UserInfo>) => {
      let info = action.payload as UserInfo;
      return Object.assign({}, info);
    },
    [LOGIN_REDIRECT]: (userInfo: UserInfo, action: Action<UserInfo>) => {
      return Object.assign({}, userInfo);
    }
  },
  initialState
);

export { login };