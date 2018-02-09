import { handleActions, Action } from 'redux-actions';
import { LOADBUTTON_CLICK } from './action-types';
import User from '../../Models/User';

const initialState: User[] = [];
  
const part2 = handleActions<User[], User[]>(
  {
    [LOADBUTTON_CLICK]: (state: User[],  action: Action<User[]>) => {
      let users = action.payload;
      return Object.assign({}, users);
    }
  },
  initialState
);

export { part2 };
