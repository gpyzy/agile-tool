import { createAction } from 'redux-actions';

import {
    CLICK_LOGIN,
    CLICK_LOGOUT
} from './constants/ActionTypes';
import { UserInfo } from './model';

const loginClicked = createAction<UserInfo, string, string>(
    CLICK_LOGIN,
    (displayName: string, token: string) => ({
        displayName: displayName,
        token: token
    })
);

// const logoutClicked = createAction<UserInfo>(
//     CLICK_LOGOUT, () => { return { displayName: '', token: '' }; }
// );

const helloWorld = createAction<UserInfo, string>(
    CLICK_LOGOUT, (input: string) => ({
        displayName: 'helloworld ' + input,
        token: input
    })
);

export {
    loginClicked,
    // logoutClicked,
    helloWorld

};