const initialState = {
  uid: null,
  displayName: null,
  email: '',
  password: '',
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      console.log('state', state)
      console.log('action', action)
      return Object.assign({}, state, {
        displayName: action.payload.displayName,
        email: action.payload.email,
        uid: action.payload.uid,
      })
    case 'CHANGE_EMAIL':
      console.log('state', state)
      console.log('action', action)
      return Object.assign({}, state, {
        email: action.email
      })
    case 'CHANGE_PASSWORD':
      console.log('state', state)
      console.log('action', action)
      return Object.assign({}, state, {
        password: action.password
      })
    default:
      return state;
  }
}

export default currentUser;
