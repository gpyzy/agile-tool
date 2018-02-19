import { Store, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const store: Store<{}> = createStore(rootReducer, applyMiddleware(thunk));

// Use the following codes to debug the state object.
// let ui: UserInfo = { displayName: 'jony', token: '12345' };
// console.log(store.getState());
// store.dispatch({
//     type: 'LOGIN_COMPLETE',
//     payload: ui
// });

export const configureStore = () => {  
    if (process.env.NODE_ENV !== 'production') {
      if (module.hot) {
        module.hot.accept('./reducers', () => {
          store.replaceReducer(rootReducer);
        });
      }
    }
  
    return store;
  };
  
export default store;
