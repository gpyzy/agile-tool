import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import fetch from 'node-fetch';
import {
  LOADBUTTON_CLICK,
  LOADBUTTON_LOADDATA_SUCCESS,
  LOADBUTTON_LOADDATA_FAIL
} from './action-types';
import { User } from '../../Models';
import { Part2State } from '../part2';

const clickLoadButton = createAction<User[], User[]>(
  LOADBUTTON_CLICK,
  users => {
    console.log('LOADBUTTON_CLICK');
    return users;
  }
);

const loadDataSuccess = createAction<User[], User[]>(
  LOADBUTTON_LOADDATA_SUCCESS,
  (result: User[]) => {
    console.log('LOADBUTTON_LOADDATA_SUCCESS');
    return result;
  }
);

const loadDataFailed = createAction(LOADBUTTON_LOADDATA_FAIL, () => {
  console.log('LOADBUTTON_LOADDATA_FAIL');
});

const clickLoadButtonAsync = (part2: Part2State) => {
  return function (dispatch: Dispatch<{}>) {
    dispatch(clickLoadButton(part2.userList));

    return fetch(part2.requestUrl)
      .then(
      response => response.json(),
      error => {
        dispatch(loadDataFailed());
      }
      )
      .then(
      (json: User[]) => {
        dispatch(loadDataSuccess(json));
      },
      error => {
        dispatch(loadDataFailed());
      }
      );
  };
};

const clickLoadButtonAsync2 = (part2: Part2State) => async (dispatch: Dispatch<{}>) => {
  dispatch(clickLoadButton(part2.userList));
  try {
    const result = await fetch(part2.requestUrl);
    const json: User[] = await result.json();
    dispatch(loadDataSuccess(json));
  } catch (ex) {
    let error = ex;
    console.log(error.message);
    dispatch(loadDataFailed());
  }
};

export { clickLoadButtonAsync, clickLoadButtonAsync2 };
