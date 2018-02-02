import { handleActions, Action } from 'redux-actions';
import { UserInfo } from './model';
import {
    CLICK_LOGIN,
    CLICK_LOGOUT
} from './constants/ActionTypes';

const initialState: UserInfo = {
    displayName: '',
    token: ''
};

export default handleActions<UserInfo, UserInfo>(
    {
        [CLICK_LOGIN]: (userInfo: UserInfo, action: Action<UserInfo>): UserInfo => {
            return {
                displayName: userInfo.displayName + '_1',
                token: userInfo.token + '_1'
            };
        },
        // [CLICK_LOGOUT]: (state: UserInfo, action: Action<UserInfo>): UserInfo => {
        //     window.alert(action.type);
        //     return { displayName: '', token: '' };
        // }
        [CLICK_LOGOUT]: (userInfo: UserInfo, action: Action<UserInfo>) => {

            let info = action.payload as UserInfo;
            return { displayName: info.displayName, token: info.token };
        }
    },
    initialState);
