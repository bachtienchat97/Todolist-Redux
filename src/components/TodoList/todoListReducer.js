const initState = [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn React', completed: true, priority: 'Low' },
    { id: 3, name: 'Learn Redux', completed: false, priority: 'High' }
]

const todoListReducer = ( state = initState, action ) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [
          ...state, //clone lại state hiện tại, immuntate : bất biến
          action.payload
      ]
    case 'todoList/toggleTodoStatus':
      return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo) //clone lại todo hiện tại và cập nhật !completed
    default:
      return state;
  }
}

export default todoListReducer;