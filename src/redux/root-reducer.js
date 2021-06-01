import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

const rootRecuder = combineReducers({
    user: userReducer
})

export default rootRecuder;