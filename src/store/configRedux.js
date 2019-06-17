import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';

const reducers = combineReducers({
    userReducer
});

const configRedux = () => {
    return createStore(reducers);
}

export default configRedux;
