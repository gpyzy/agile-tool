import { MiddlewareAPI } from 'redux';
import * as Cookies from 'es-cookie';
import { get as lodash_get } from 'lodash';

const oauth2TokenMiddleware = fetchImplementation => (
  store: MiddlewareAPI<{}>
) => {
  return next => {
    return action => {
      const tokenInCookie = Cookies.get('token');
      const tokenInState = lodash_get(store.getState(), 'part3.token');

      return next(action);
    };
  };
};

export default oauth2TokenMiddleware;
