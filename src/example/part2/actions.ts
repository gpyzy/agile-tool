import { createAction } from 'redux-actions';
import {
  LOADBUTTON_CLICK,
  LOADBUTTON_LOADDATA_SUCCESS,
  LOADBUTTON_LOADDATA_FAIL
} from './action-types';
import { User } from '../../Models';
import fetch from 'node-fetch';
import { Dispatch } from 'redux';

const clickLoadButtonAsync = () => {
  return function(dispatch: Dispatch<{}>) {
    dispatch(clickLoadButton());

    return fetch('http://localhost:3000/data/user.json').then(
      response => {
        let result: User[] = [{ fullName: 'Aax', title: 'Sir', age: 20 }];
        dispatch(loadDataSuccessLoadButton(result));
        return response.json();
      },
      error => {
        dispatch(loadDataFailLoadButton());
      }
    );
  };
};

const clickLoadButton = createAction(LOADBUTTON_CLICK);

const loadDataSuccessLoadButton = createAction<User[], User[]>(
  LOADBUTTON_LOADDATA_SUCCESS,
  (result: User[]) => {
    console.log('LOADBUTTON_LOADDATA_SUCCESS triggered');
    return result;
  }
);

const loadDataFailLoadButton = createAction(LOADBUTTON_LOADDATA_FAIL, () => {
  console.log('LOADBUTTON_LOADDATA_FAIL triggered');
});

export {
    clickLoadButtonAsync,
    clickLoadButton,
    loadDataSuccessLoadButton,
    loadDataFailLoadButton
};