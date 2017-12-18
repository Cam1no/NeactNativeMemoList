import { combineReducers } from 'redux';

const initialState = {
  uid: null,
  displayName: null
}

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

const currentUser = (state = initialState, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        displayName: action.payload.displayName,
        email: action.payload.email,
        uid: action.payload.uid,
      }
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

export default combineReducers({ email, password, todos, currentUser });
