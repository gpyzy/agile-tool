import { createAction } from 'redux-actions';

import { LOGIN_COMPLETE, LOGIN_REDIRECT } from './constants/ActionTypes';
import { UserInfo } from './model';

const loginComplete = createAction<UserInfo, string, string>(
  LOGIN_COMPLETE,
  (displayName: string, token: string) => {
    console.log(LOGIN_COMPLETE);
    return {
      displayName: displayName,
      token: token
    };
  }
);

// const loginRedirect = createAction(LOGIN_REDIRECT);
const loginRedirect = createAction(LOGIN_REDIRECT, () => {
  console.log(LOGIN_REDIRECT);
});

export { loginComplete, loginRedirect };
