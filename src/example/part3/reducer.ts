import { handleActions, Action, handleAction } from 'redux-actions';
import {
  GET_USER_CLICK,
  GOT_USERS,
  REFRESH_TOKEN_CLICK,
  REFRESHED_TOKEN
} from './action-types';
import User from '../../Models/User';
import Part3State from './state';

const initialState: Part3State = {
  data: [],
  // Change url to http://localhost:3000/data/doesnotexist.json to test fail cases
  url: 'http://localhost:3000/data/user.json',
  token: 'helloworld!',
  clickCount: 0
};

const gotUsers = handleAction<Part3State, User[]>(
  GOT_USERS,
  (state: Part3State, action: Action<User[]>) => {
    return { ...state, data: state.data.concat(action.payload as User[]) };
  },
  initialState
);

const getUserClick = handleAction<Part3State, number>(
  GET_USER_CLICK,
  (state, action) => ({
    ...state,
    clickCount: state.clickCount + (action.payload as number)
  }),
  initialState
);

const refereshTokenClick = handleAction<Part3State, number>(
  REFRESH_TOKEN_CLICK,
  (state, action) => state,
  initialState
);

const refreshedToken = handleAction<Part3State, string>(
  REFRESHED_TOKEN,
  (state, action) => ({
    ...state,
    token: action.payload as string
  }),
  initialState
);

const part3 = handleActions<Part3State, number | User[] | string>(
  {
    [GOT_USERS]: gotUsers,
    [GET_USER_CLICK]: getUserClick,
    [REFRESH_TOKEN_CLICK]: refereshTokenClick,
    [REFRESHED_TOKEN]: refreshedToken
  },
  initialState
);

export { part3 };
