import { handleActions, Action } from 'redux-actions';
import { UserInfo } from './model';
import {
    CLICK_LOGIN,
    CLICK_LOGOUT
} from './constants/ActionTypes';

const initialState: UserInfo = {
    displayName: "",
    token: ""
};



export default handleActions<UserInfo, UserInfo>({
    [CLICK_LOGIN]: (state: UserInfo, action: Action<UserInfo>): UserInfo => {
        window.alert(action.type);
        return {
            displayName: state.displayName + "_1",
            token: state.token + "_1"
        };
    },
    [CLICK_LOGOUT]: (state: UserInfo, action: Action<UserInfo>): UserInfo => {
        window.alert(action.type);
        return { displayName: '', token:''};
    }
}, initialState);
