import { combineReducers } from 'redux';
import TabReducer from './TabReducer';

const rootReducer = combineReducers({
    tab: TabReducer
});

export default rootReducer;