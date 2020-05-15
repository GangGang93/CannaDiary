import { combineReducers } from 'redux';
import user from './user_reducer';
import journal from './journal_reducer';
import message from './message_reducer';
const rootReducer = combineReducers({
    user,
    journal,
    message,
});

export default rootReducer;