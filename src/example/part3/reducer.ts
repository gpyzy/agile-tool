import { handleActions, Action, handleAction } from 'redux-actions';
import {
  GET_USERS,
  GOT_USERS,
  GET_TOKEN,
  GOT_TOKEN,
} from './action-types';
import User from '../../Models/User';
import Part3State from './state';
// import ActionButton from 'antd/lib/modal/ActionButton';

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
  GET_USERS,
  (state, action) => ({
    ...state,
    clickCount: state.clickCount + (action.payload as number)
  }),
  initialState
);

const refereshTokenClick = handleAction<Part3State, number>(
  GET_TOKEN,
  (state, action) => state,
  initialState
);

const refreshedToken = handleAction<Part3State, string>(
  GOT_TOKEN,
  (state, action) => ({
    ...state,
    token: action.payload as string
  }),
  initialState
);

const clicTestResult = handleAction<Part3State, string>(
  'jony2',
  (state, action) => {
    console.log(action);
    return state;
  },
  initialState
);

const part3 = handleActions<Part3State, number | User[] | string>(
  {
    [GOT_USERS]: gotUsers,
    [GET_USERS]: getUserClick,
    [GET_TOKEN]: refereshTokenClick,
    [GOT_TOKEN]: refreshedToken,
    'jony2': clicTestResult
  },
  initialState
);

export { part3 };
