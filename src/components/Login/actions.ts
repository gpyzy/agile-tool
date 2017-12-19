import { createAction } from 'redux-actions';

import {
    CLICK_LOGIN,
    CLICK_LOGOUT
} from './constants/ActionTypes';
import { IUser } from './model';


const loginClicked = createAction<IUser, string, string>(
    CLICK_LOGIN,
    (displayName: string, token: string) => ({
        displayName,
        token
    })
);
