import { MiddlewareAPI, Dispatch } from 'redux';
import { FETCH_TOKEN_ASYNC } from '../example/part3';
// import { get as cookie_get } from 'es-cookie';
import { get as lodash_get, set as lodash_set } from 'lodash';

interface Action {
  payload: {};
  type: string;
}
// <S>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
const oauth2TokenMiddleware = fetchImplementation => {
  return (store: MiddlewareAPI<{}>) => {
    return (next: Dispatch<{}>) => {
      return (action: Action) => {
        /// tokenization
        if (action.type === FETCH_TOKEN_ASYNC) {
          /// Set token in http header
          const tokenInState = lodash_get(store.getState(), 'part3.token');
          if (tokenInState !== undefined) {
            lodash_set(action.payload, 'token', tokenInState);
          }
        } else {
          return next(action);
        }
        throw 'Not Implemented yet';
      };
    };
  };
};

export default oauth2TokenMiddleware;
// https://medium.com/@jacobp100/you-arent-using-redux-middleware-enough-94ffe991e6
