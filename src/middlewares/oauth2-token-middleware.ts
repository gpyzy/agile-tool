import { MiddlewareAPI } from 'redux';
// import * as _ from 'lodash';

const oauth2TokenMiddleware = fetchImplementation => (store: MiddlewareAPI<{}>) => {
  return next => {
    return action => {
      console.log('haha?');
      return next(action);
    };
  };
};

export default oauth2TokenMiddleware;
