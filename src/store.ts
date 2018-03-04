// take reference from https://github.com/facebook/create-react-app/issues/2317
// need to run 'yarn add -D @types/webpack-env' to install the webpack-env for typescript
// or else compile not get success.

import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import oauth2TokenMiddleware from './middlewares/oauth2-token-middleware';
// import { fetchWithToken } from './example/part3';
import fetch from 'node-fetch'; 

const store: Store<{}> = createStore(
  rootReducer,
  applyMiddleware(thunk, oauth2TokenMiddleware(fetch))
  /// Seems I have to reseach thunkAction first before I touch middleware.
  // applyMiddleware(thunk)
);

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
