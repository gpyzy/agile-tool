import { handleActions, Action } from 'redux-actions';
import { User } from '../Models/';
import { CLICK_GETUSERLIST } from './constants/ActionTypes';

import fetch from 'node-fetch';

const initialState: User[] = [];

export default handleActions<User[], User[]>(
  {
    [CLICK_GETUSERLIST]: (state: User[], action: Action<User[]>): User[] => {
      getUserListAsync().then(abc => {
        throw '';
      });
    }
  },
  initialState
);

async function getUserListAsync(): Promise<User[]> {
  const res = await fetch('http://localhost:3000/Data/user.json');
  const json = await res.json();
  return json as User[];
}
