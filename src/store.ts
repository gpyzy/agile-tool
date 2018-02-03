import { Store, createStore } from 'redux';
import rootReducer from './reducer';
// import { UserInfo } from './Login/model';

const store: Store<{}> = createStore(
    rootReducer
);

// Use the following codes to debug the state object.
// let ui: UserInfo = { displayName: 'jony', token: '12345' };
// console.log(store.getState());
// store.dispatch({
//     type: 'LOGIN_COMPLETE',
//     payload: ui
// });

export default store;