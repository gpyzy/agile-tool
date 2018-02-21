import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import fetch from 'node-fetch';
import { GET_USER_CLICK } from './action-types';
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
    return async function (dispatch: Dispatch<{}>) {
        dispatch(clickGetUser(part3State));

        const result = await fetch(part3State.Url);
        const json: User[] = await result.json();
        console.log(json);
    };
};

const clickGetUser = createAction<Part3State, Part3State>(
    GET_USER_CLICK,
    (state) => {
        const result = { ...state, ClickCount: state.ClickCount + 1 };
        console.log(result);
        return result;
    }
);

export { clickGetUser, clickGetUserAsync };
