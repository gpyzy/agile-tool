import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { Store, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

const initialState = {
};

const store: Store<{}> = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
