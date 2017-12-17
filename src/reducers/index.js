import { combineReducers } from 'redux';

const email = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_EMAIL':
      return action.email
    default:
      return state;
  }
};

const password = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_PASSWORD':
      return action.password;
    default:
      return state;
  }
}


export default combineReducers({ email, password });
