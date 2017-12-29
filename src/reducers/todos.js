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
    case 'GET_MEMO_LISTS':
      console.log('state.todos', state)
      console.log('action.todos', action)
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
