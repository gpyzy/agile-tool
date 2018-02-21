import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import oauth2TokenMiddleware from './middlewares/oauth2-token-middleware';
import { clickGetUserAsync } from './example/part3';

const store: Store<{}> = createStore(rootReducer, applyMiddleware(thunk, oauth2TokenMiddleware(clickGetUserAsync)));

// Use the following codes to debug the state object.
// let ui: UserInfo = { displayName: 'jony', token: '12345' };
// console.log(store.getState());
// store.dispatch({
//     type: 'LOGIN_COMPLETE',
//     payload: ui
// });

const configureStore = () => {  
    if (process.env.NODE_ENV !== 'production') {
      if (module.hot) {
        module.hot.accept('./reducer', () => {
          store.replaceReducer(rootReducer);
        });
      }
    }
  
    return store;
  };
  
export default configureStore;
