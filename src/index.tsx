import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { Store, createStore } from 'redux';
import rootReducer from './reducer';

import registerServiceWorker from './registerServiceWorker';

const initialState = {
};

const store: Store<{}> = createStore(
  rootReducer,
  initialState
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
