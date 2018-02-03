import { Store, createStore } from 'redux';
import rootReducer from './reducer';

const initialState = {
};

const store: Store<{}> = createStore(
    rootReducer,
    initialState
);

export default store;