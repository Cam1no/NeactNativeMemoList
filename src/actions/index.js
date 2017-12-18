
export const setEmail = email => dispatch => dispatch({ type: 'CHANGE_EMAIL', email });

export const setPassword = password => dispatch => dispatch({ type: 'CHANGE_PASSWORD', password });

export const setUserName = username => dispatch => dispatch({ type: 'CHANGE_USERNAME', username });

export const addTodo = text => dispatch => dispatch({ type: 'ADD_TODO', text })
