import { createAction } from 'redux-actions';

import { LOGIN_COMPLETE, LOGIN_REDIRECT } from './action-types';
import { UserInfo } from './model';

const completeLogin = createAction<UserInfo, string, string>(
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
const redirectLogin = createAction(LOGIN_REDIRECT, () => {
  console.log(LOGIN_REDIRECT);
});

export { completeLogin, redirectLogin };
