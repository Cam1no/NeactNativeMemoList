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

const user = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return action.username;
    default:
      return state;
  }
}
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          text: action.text,
          created_at: new Date(),
        },
        ...state,
      ];
    default:
      return state;
  }
}

export default combineReducers({ email, password, todos, user });
