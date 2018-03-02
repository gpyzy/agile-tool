import { createAction } from 'redux-actions';
import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import fetch from 'node-fetch';
import { GET_USERS, GOT_USERS, GET_TOKEN, GOT_TOKEN } from './action-types';
import Part3State from './state';
import { User } from '../../Models';
// import { get as lodash_get } from 'lodash';
import { Action } from '../../actions';

// const getUsers = createAction<number, number>(GET_USERS, counter => {
//   console.log(GET_USERS);
//   return counter;
// });
const getUsers: ActionCreator<Action> = (counter: number) => ({
  type: GET_USERS,
  payload: counter
});

// const gotUsers = createAction<User[]>(GOT_USERS);
const gotUsers: ActionCreator<Action> = (users: User[]) => ({
  type: GOT_USERS,
  payload: users
});

// const clickRefreshToken = createAction(GET_TOKEN, () => {
//   console.log(GET_TOKEN);
// });
const clickRefreshToken: ActionCreator<Action> = () => ({
  type: GET_TOKEN
});

// const refreshedToken = createAction<string>(REFRESHED_TOKEN);

// export const clickGetUserAsync = (part3State: Part3State) => {
//   return async function(dispatch: Dispatch<{}>) {
//     dispatch(getUsers(1));

//     const result = await fetch(part3State.url);
//     const users: User[] = await result.json();
//     console.log(users);

//     // error handling is omitted
//     dispatch(gotUsers(users));
//   };
// };
export const clickGetUsersAsync: ActionCreator<
  ThunkAction<Promise<Action>, void, void>
> = (part3: Part3State) => {
  return async (dispatch /*, getState*/): Promise<Action> => {
    dispatch(getUsers(1));

    const result = await fetch(part3.url);
    const users: User[] = await result.json();
    console.log(users);
    // error handling is omitted
    return dispatch(gotUsers(users));
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
