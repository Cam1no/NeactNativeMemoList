
export const setEmail = email => dispatch => dispatch({ type: 'CHANGE_EMAIL', email }) && console.log("ayay");

export const setPassword = password => dispatch => dispatch({ type: 'CHANGE_PASSWORD', password });

export const addTodo = text => dispatch => dispatch({ type: 'ADD_TODO', text })
