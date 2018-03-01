import { MiddlewareAPI } from 'redux';
import { get as cookie_get } from 'es-cookie';
import { get as lodash_get } from 'lodash';

interface Action {
  payload: any;
  type: string;
}

const oauth2TokenMiddleware = (fetchImplementation) => {
  return (store: MiddlewareAPI<{}>) => {
    return next => {
      return (action: Action) => {
        const tokenInState = lodash_get(store.getState(), 'part3.token');
        const tokenInCookie = cookie_get('token');
        console.log('hehe...');
        console.log(tokenInState);
        console.log(tokenInCookie);
        return next(action);
      };
    };
  };

}

export default oauth2TokenMiddleware;
// https://medium.com/@jacobp100/you-arent-using-redux-middleware-enough-94ffe991e6