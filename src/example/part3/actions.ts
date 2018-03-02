import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import fetch from 'node-fetch';
import {
  GET_USER_CLICK,
  GOT_USERS,
  REFRESHED_TOKEN,
  REFRESH_TOKEN_CLICK,
  FETCH_TOKEN_ASYNC
} from './action-types';
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
  console.log(GET_USER_CLICK);
  return counter;
});

const gotUsers = createAction<User[]>(GOT_USERS);

const clickRefreshToken = createAction(REFRESH_TOKEN_CLICK, () => {
  console.log(REFRESH_TOKEN_CLICK);
});

// const refreshedToken = createAction<string>(REFRESHED_TOKEN);

export const clickGetUserAsync = (part3State: Part3State) => {
  return async function(dispatch: Dispatch<{}>) {
    dispatch(clickGetUser(1));

    const result = await fetch(part3State.url);
    const users: User[] = await result.json();
    console.log(users);

    // error handling is omitted
    dispatch(gotUsers(users));
  };
};

interface Fetch {
  url: string;
  params: {};
}
export const fetchWithToken = createAction<Fetch, string, {}>(
  FETCH_TOKEN_ASYNC,
  (url, params) => {
    return { url: url, params: params };
  }
);

export const clickRefreshTokenAsync = (part3State: Part3State) =>
  async function(dispatch: Dispatch<{}>) {
    dispatch(clickRefreshToken());
    try {
      //const result = await fetch('http://localhost:3000/data/token.json');
      //const token = await result.json();
      //const value = lodash_get(token, 'payload.sub');
      //dispatch(refreshedToken(value));

      await dispatch(
        fetchWithToken('http://localhost:3000/data/token.json', {})
      );
  
      /// TODO - what's next?
    } catch (ex) {
      console.log(ex);
    }
  };
