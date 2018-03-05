// import { MiddlewareAPI, Dispatch, applyMiddleware, Middleware } from 'redux';
// import { FETCH_TOKEN_ASYNC } from '../example/part3';
// import { get as cookie_get } from 'es-cookie';
import { get as lodash_get, set as lodash_set } from 'lodash';
import { FETCH_TOKEN } from '../example/part3';
import { MiddlewareAPI, Dispatch } from 'redux';

// import { Fetch } from 'src/example/part3/actions';
// import { Action } from '../actions';

// <S>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
const oauth2TokenMiddleware = (fetchImplementation) => {
  return (store: MiddlewareAPI<{}>) => {
    return (next: Dispatch<{}>): Dispatch<{}> => {
      return async action => {
        /// tokenization
        if (action.type === FETCH_TOKEN) {
          /// Set token from state to http header
          const { url, params } = action.payload;
          const tokenInState = lodash_get(store.getState(), 'part3.token');
          let newParams = Object.assign({}, params);
          if (tokenInState !== undefined) {
            let temp = lodash_set(newParams, 'headers.token', tokenInState);
            temp = temp;
          }

          return await fetchImplementation(url, newParams);
        }

        return next(action);
      };
    };
  };
};

export const testMiddleWare = store => next => action => {
  if (action.type === 'jony') {
    return next({ type: 'jony2', payload: 'jony@live.cn' });
  } else {
    return next(action);
  }
};

export default oauth2TokenMiddleware;
// https://medium.com/@jacobp100/you-arent-using-redux-middleware-enough-94ffe991e6