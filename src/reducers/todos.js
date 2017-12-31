const initialState = [
  { body: '', createdOn: '' }
]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          body: action.body,
        },
        ...state,
      ];
    case 'GET_TODO_LISTS':
      return action.todos;
    case 'DELETE_TODO':
      console.log('action', action);
      return state.filter((todo) => {
        console.log('todo', todo);
        return todo.id !== action.todo.id
      });
    default:
      return state;
  }
}

export default todos;
