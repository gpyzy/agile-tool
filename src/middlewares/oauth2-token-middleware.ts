// import { MiddlewareAPI, Dispatch } from 'redux';
// import { FETCH_TOKEN_ASYNC } from '../example/part3';
// import { get as cookie_get } from 'es-cookie';
import { get as lodash_get } from 'lodash';
import { FETCH_TOKEN } from '../example/part3';
// import { Action } from '../actions';

// <S>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
const oauth2TokenMiddleware = fetchImplementation => {
  return (store) => {
    return (next) => {
      return (action) => {
        /// tokenization
        if (action.type === FETCH_TOKEN) {
          /// Set token from state to http header
          const { url, params } = action.payload;
          const tokenInState = lodash_get(store.getState(), 'part3.token');
          let newParams = Object.assign({}, params);
          if (tokenInState !== undefined) {
            newParams = Object.assign(newParams, { token: tokenInState });
          }
          return fetchImplementation(url, newParams);
        }

        return next(action);
      };
    };
  };
};

export default oauth2TokenMiddleware;
// https://medium.com/@jacobp100/you-arent-using-redux-middleware-enough-94ffe991e6
