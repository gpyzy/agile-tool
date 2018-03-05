import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
// import fetch from 'node-fetch';
import {
  GET_USERS,
  GOT_USERS,
  GET_TOKEN,
  FETCH_TOKEN,
  FETCH_FAILED
} from './action-types';
import Part3State from './state';
import { User } from '../../Models';
// import { get as lodash_get } from 'lodash';
import { Action } from '../../actions';

export interface Fetch {
  url: string;
  params: {};
}

const getUsers: ActionCreator<Action<number>> = (counter: number) => ({
  type: GET_USERS,
  payload: counter
});

const gotUsers: ActionCreator<Action<User[]>> = (users: User[]) => ({
  type: GOT_USERS,
  payload: users
});

const clickRefreshToken: ActionCreator<Action<undefined>> = () => ({
  type: GET_TOKEN
});

export const fetchWithToken: ActionCreator<Action<Fetch>> = (
  url,
  params
): Action<Fetch> => {
  return { type: FETCH_TOKEN, payload: { url: url, params: params } };
};
export const fetchWithTokenFailed: ActionCreator<Action<string>> = (
  err: string
): Action<string> => {
  console.log(FETCH_FAILED);
  return { type: FETCH_FAILED, payload: err };
};

export const clickGetUsersAsync: ActionCreator<
  ThunkAction<Promise<Action<User[] | string>>, Part3State, void>
> = (part3: Part3State) => {
  return async (dispatch /*, getState*/): Promise<Action<User[] | string>> => {
    dispatch(getUsers(1));

    try {
      const temp = await dispatch(fetchWithToken(part3.url, {}));
      
      console.log(temp);
      // const result = await fetch(part3.url);
      // const users: User[] = await result.json();
      // console.log(users);
      // return dispatch(gotUsers(users));
      return dispatch(gotUsers(1));
    } catch (ex) {
      return dispatch(fetchWithTokenFailed(ex as string));
    }
  };
};

// export const fetchWithToken = createAction<Fetch, string, {}>(
//   GOT_TOKEN,
//   (url, params) => {
//     return { url: url, params: params };
//   }
// );

// export const clickRefreshTokenAsync = (part3State: Part3State) =>
//   async function (dispatch: Dispatch<{}>) {
//     dispatch(clickRefreshToken());
//     try {
//       await dispatch(
//         fetchWithToken('http://localhost:3000/data/token.json', {})
//       );

//       /// TODO - what's next?
//     } catch (ex) {
//       console.log(ex);
//     }
//   };

export const clickRefreshTokenAsync: ActionCreator<
  ThunkAction<Promise<Action<{}>>, Part3State, void>
> = () => {
  return async (dispatch /*getState*/): Promise<Action<{}>> => {
    dispatch(clickRefreshToken());
    try {
      const response = await dispatch(
        fetchWithToken('http://localhost:3000/data/token.json', {})
      );
      return response;
    } catch (ex) {
      console.log(ex);
      return dispatch(fetchWithTokenFailed(ex));
    }
  };
};
