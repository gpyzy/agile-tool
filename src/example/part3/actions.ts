import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import fetch from 'node-fetch';
import { GET_USER_CLICK, GOT_USERS, REFRESHED_TOKEN } from './action-types';
import Part3State from './state';
import { User } from '../../Models';
import { get as lodash_get } from 'lodash';

// const temp = createActions<Part3State>({
//     [GET_USER_CLICK]: (state: Part3State) => {
//         console.log(GET_USER_CLICK);
//         let result = Object.assign({}, state);
//         result.ClickCount++;

//         return result;
//     },
//     [FETCCH_GET_DATA]: (state: Part3State) => { return state; }
// });

const clickGetUser = createAction<number, number>(GET_USER_CLICK, counter => {
  console.log([GET_USER_CLICK]);
  console.log(GET_USER_CLICK);
  return counter;
});

const gotUsers = createAction<User[]>(GOT_USERS);

const clickRefreshToken = createAction(REFRESHED_TOKEN, () => {
  console.log([REFRESHED_TOKEN]);
});

const refreshedToken = createAction<string>(REFRESHED_TOKEN);

export const clickGetUserAsync = (part3State: Part3State) => {
  return async function(dispatch: Dispatch<{}>) {
    dispatch(clickGetUser(part3State.clickCount));

    const result = await fetch(part3State.url);
    const users: User[] = await result.json();
    console.log(users);

    // error handling is omitted
    dispatch(gotUsers(users));
  };
};

export const clickRefreshTokenAsync = (part3State: Part3State) =>
  async function(dispatch: Dispatch<{}>) {
    dispatch(clickRefreshToken);
    try {
      const result = await fetch('http://localhost:3000/data/token.json');
      const token = await result.json();
      const value = lodash_get(token, 'payload.sub');
      dispatch(refreshedToken(value));
    } catch (ex) {
      console.log(ex);
    }
  };
