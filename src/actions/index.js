
export const setEmail = email => dispatch => dispatch({ type: 'CHANGE_EMAIL', email });

export const setPassword = password => dispatch => dispatch({ type: 'CHANGE_PASSWORD', password });

export const setUserName = username => dispatch => dispatch({ type: 'CHANGE_USERNAME', username });

export const getTodoTodos = todos => dispatch => dispatch({ type: 'GET_MEMO_LISTS', todos });

export const deleteTodo = todo => dispatch => dispatch({ type: 'DELETE_TODO', todo });

export const setCurrentUser =
  user => dispatch =>
  dispatch({
    type: 'SET_CURRENT_USER',
    payload: {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
    }
  });

export const addTodo = body => dispatch => dispatch({ type: 'ADD_TODO', body })
