import { createAction } from 'redux-actions';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import fetch from 'node-fetch';
import { GET_USERS, GOT_USERS, GET_TOKEN, GOT_TOKEN } from './action-types';
import Part3State from './state';
import { User } from '../../Models';
import { get as lodash_get } from 'lodash';

// const clickGetUser = createAction<number, number>(GET_USERS, counter => {
//   console.log(GET_USERS);
//   return counter;
// });
const clickGetUser: ActionCreator<Action> = counter => {
  return {
    type: GET_USERS,
    payload: counter
  };
};

const gotUsers = createAction<User[]>(GOT_USERS);

const clickRefreshToken = createAction(GET_TOKEN, () => {
  console.log(GET_TOKEN);
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
  GOT_TOKEN,
  (url, params) => {
    return { url: url, params: params };
  }
);

export const clickRefreshTokenAsync = (part3State: Part3State) =>
  async function(dispatch: Dispatch<{}>) {
    dispatch(clickRefreshToken());
    try {
      await dispatch(
        fetchWithToken('http://localhost:3000/data/token.json', {})
      );

      /// TODO - what's next?
    } catch (ex) {
      console.log(ex);
    }
  };
