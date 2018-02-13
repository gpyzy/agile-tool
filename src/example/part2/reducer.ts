import { handleActions, Action } from 'redux-actions';
import { LOADBUTTON_LOADDATA_SUCCESS } from './action-types';
import User from '../../Models/User';

interface Part2State {
  userList: User[];
  requestUrl: string;
}

const initialState: Part2State = {
  userList: [],
  // Change url to http://localhost:3000/data/doesnotexist.json to test fail cases
  requestUrl: 'http://localhost:3000/data/user.json'
};

const part2 = handleActions<Part2State, User[]>(
  {
    [LOADBUTTON_LOADDATA_SUCCESS]: (
      state: Part2State,
      action: Action<User[]>
    ) => {
      let newUsers = action.payload as User[];
      let newState = Object.assign({}, state);
      newState.userList = newState.userList.concat(newUsers);
      return newState;
    }
  },
  initialState
);

export { part2, Part2State };
