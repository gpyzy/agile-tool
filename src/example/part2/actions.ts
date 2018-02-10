import { createAction } from 'redux-actions';
import {
    LOADBUTTON_CLICK,
    LOADBUTTON_LOADDATA_SUCCESS,
    LOADBUTTON_LOADDATA_FAIL
} from './action-types';
import { User } from '../../Models';
import fetch from 'node-fetch';
import { Dispatch } from 'redux';

const clickLoadButtonAsync = (users: User[]) => {
    return function (dispatch: Dispatch<{}>) {
        dispatch(clickLoadButton(users));

        // Change url to http://localhost:3000/data/doesnotexist.json to test fail cases
        return fetch('http://localhost:3000/data/user.json').then(
            response => response.json(),
            error => {
                dispatch(loadDataFailed());
            }
        ).then(
            (json: User[]) => {
                dispatch(loadDataSuccess(json));
            },
            error => {
                dispatch(loadDataFailed());
            });
    };
};

const clickLoadButton = createAction<User[], User[]>(LOADBUTTON_CLICK, (users) => {
    console.log('LOADBUTTON_CLICK');
    return users;
});

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

export {
    clickLoadButtonAsync
};