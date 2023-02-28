export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data
  }
}

export const toggleTodoStatus = (todoId) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoId
  }
}

export const searchFilterChange = (data) => {
  return {
    type: 'filter/searchFilterChange',
    payload: data
  }
}

export const statusFilterChange = (data) => {
  return {
    type: 'filter/statusFilterChange',
    payload: data
  }
}

export const priorityFilterChange = (data) => {
  return {
    type: 'filter/priorityFilterChange',
    payload: data
  }
}