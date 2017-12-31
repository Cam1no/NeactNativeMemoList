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
      return state.filter((todo) => {
        return todo.createdOn !== action.createdOn
      });
    default:
      return state;
  }
}

export default todos;
