import { handleActions, Action } from 'redux-actions';
import { LOADBUTTON_LOADDATA_SUCCESS } from './action-types';
import User from '../../Models/User';

const initialState: User[] = [];

const part2 = handleActions<User[], User[]>(
  {
    [LOADBUTTON_LOADDATA_SUCCESS]: (state: User[], action: Action<User[]>) => {
      let newUsers = action.payload as User[];
      return state.slice().concat(newUsers);
    }
  },
  initialState
);

export { part2 };
