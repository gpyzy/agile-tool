import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { Store, createStore } from 'redux';
import rootReducer from './reducers/reducer';

import registerServiceWorker from './registerServiceWorker';

const initialState = {};

const store: Store<any> = createStore(rootReducer, initialState);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
