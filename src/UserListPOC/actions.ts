import { createAction } from 'redux-actions';

import { CLICK_GETUSERLIST } from './constants/ActionTypes';

import * as Models from '../Models';

const getUserListClicked = createAction<Models.User[], Models.User[]>(
  CLICK_GETUSERLIST,
  (userList: Models.User[]) => {
    console.log(CLICK_GETUSERLIST + ' ' + userList.length);
    return userList.slice();
  }
);

export { getUserListClicked };
