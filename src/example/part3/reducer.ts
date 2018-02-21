import { handleActions, Action, handleAction } from 'redux-actions';
import { GET_USER_CLICK, FETCHED_GET_DATA } from './action-types';
import User from '../../Models/User';
import Part3State from './state';

const initialState: Part3State = {
    Data: [],
    // Change url to http://localhost:3000/data/doesnotexist.json to test fail cases
    Url: 'http://localhost:3000/data/user.json',
    token: 'helloworld!',
    ClickCount: 0
};

// const part3_1 = handleAction<Part3State, number>(){

// }

const part3 = handleActions<Part3State, number>(
    {
        [GET_USER_CLICK]: (
            state: Part3State,
            action: Action<number>
        ) => {
            let counter = action.payload;
            let newState: Part3State = { ...state, ClickCount: counter };
            return newState;
        }
    },
    initialState
);

export { part3 };