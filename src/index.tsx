import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root') as HTMLElement
    );
  });
}

registerServiceWorker();
