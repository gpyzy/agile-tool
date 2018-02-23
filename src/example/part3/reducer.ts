import { handleActions, Action, handleAction } from 'redux-actions';
import { GET_USER_CLICK, FETCHED_GET_DATA } from './action-types';
import User from '../../Models/User';
import Part3State from './state';
import { STATUS_CODES } from 'http';

const initialState: Part3State = {
    Data: [],
    // Change url to http://localhost:3000/data/doesnotexist.json to test fail cases
    Url: 'http://localhost:3000/data/user.json',
    token: 'helloworld!',
    ClickCount: 0
};

const fetchGetData = handleAction<Part3State, User[]>(
    FETCHED_GET_DATA,
    (state: Part3State, action: Action<User[]>) => {
        return { ...state, Data: action.payload as User[] };
    },
    initialState);

const getUserClick = handleAction<Part3State, number>(
    GET_USER_CLICK,
    (state, action) => ({ ...state, ClickCount: state.ClickCount + (action.payload as number) }),
    initialState
);

const part3 = handleActions<Part3State, number | User[]>(
    {
        [FETCHED_GET_DATA]: fetchGetData,
        [GET_USER_CLICK]: getUserClick
    },
    initialState
);

export { part3 };