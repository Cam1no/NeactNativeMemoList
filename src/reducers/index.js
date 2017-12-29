import currentUser from './currentUser';
import todos from './todos';

import { combineReducers } from 'redux';

export default combineReducers({ todos, currentUser });
