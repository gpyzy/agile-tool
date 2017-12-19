import { handleActions, Action } from 'redux-actions';
import { IUser } from './model';
import {
    CLICK_LOGIN,
    CLICK_LOGOUT
} from './constants/ActionTypes';

const initialState: IUser = {
    displayName: "",
    token: ""
};



export default handleActions<IUser, IUser>({
    [CLICK_LOGIN]: (state: IUser, action: Action<IUser>): IUser => {
        return {
            displayName: state.displayName + "_1",
            token: state.token + "_1"
        };
    }
}, initialState);