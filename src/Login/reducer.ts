import { handleActions, Action } from 'redux-actions';
import { UserInfo } from './model';
import { LOGIN_COMPLETE, LOGIN_REDIRECT } from './constants/ActionTypes';

const initialState: UserInfo = {
  displayName: '',
  token: ''
};

export default handleActions<UserInfo, UserInfo>(
  {
    [LOGIN_COMPLETE]: (userInfo: UserInfo, action: Action<UserInfo>) => {
      let info = action.payload as UserInfo;
      return { displayName: info.displayName, token: info.token };
    },
    [LOGIN_REDIRECT]: (userInfo: UserInfo, action: Action<UserInfo>) => {
      return Object.assign({}, userInfo);
    }
  },
  initialState
);
