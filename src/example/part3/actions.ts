import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import fetch from 'node-fetch';
import { GET_USER_CLICK, FETCHED_GET_DATA } from './action-types';
import Part3State from './state';
import { User } from '../../Models';

// const temp = createActions<Part3State>({
//     [GET_USER_CLICK]: (state: Part3State) => {
//         console.log(GET_USER_CLICK);
//         let result = Object.assign({}, state);
//         result.ClickCount++;

//         return result;
//     },
//     [FETCCH_GET_DATA]: (state: Part3State) => { return state; }
// });

const clickGetUserAsync = (part3State: Part3State) => {
  return async function(dispatch: Dispatch<{}>) {
    dispatch(clickGetUser(part3State.clickCount));

    const result = await fetch(part3State.url);
    const users: User[] = await result.json();
    console.log(users);

    // error handling is omitted
    dispatch(fetchDataSuccess(users));
  };
};

const clickGetUser = createAction<number, number>(GET_USER_CLICK, counter => {
  return counter;
});

const fetchDataSuccess = createAction<User[]>(FETCHED_GET_DATA);

export { clickGetUser, clickGetUserAsync, fetchDataSuccess };
