const initialState = {
  uid: null,
  displayName: null,
  email: '',
  password: '',
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return Object.assign({}, state, {
        displayName: action.payload.displayName,
        uid: action.payload.uid,
      })
    case 'SIGN_UP_USER':
      return Object.assign({}, state, {
        displayName: action.payload.displayName,
        uid: action.payload.uid,
        email: action.payload.email,
      })
    case 'CHANGE_EMAIL':
      return Object.assign({}, state, {
        email: action.email
      })
    case 'CHANGE_PASSWORD':
      return Object.assign({}, state, {
        password: action.password
      })
    default:
      return state;
  }
}

export default currentUser;
