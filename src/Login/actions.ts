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

const helloWorld = createAction<string>(
    CLICK_LOGOUT, () => ('helloworld')
);

export {
    loginClicked,
    // logoutClicked,
    helloWorld

};