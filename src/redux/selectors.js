import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const todoListSelector = (state) => state.todoList.todos;
export const filterPrioritySelector = (state) => state.filter.priority;

export const todoRemainingSelector = createSelector(todoListSelector,filterStatusSelector,searchTextSelector,filterPrioritySelector, (todoList,status,searchText,priority) => {
  return todoList.filter(todo => {
    if(status === 'All') {
      return priority.length ? todo.name.toLowerCase().includes(searchText.toLowerCase()) && priority.includes(todo.priority) : todo.name.includes(searchText);
    }
    return (todo.name.toLowerCase().includes(searchText.toLowerCase()) && (status === 'Completed' ? todo.completed : !todo.completed) && (priority.length ? priority.includes(todo.priority) : true))
  })
})
// export const todoListSelector = (state) => {
//   const todoFilter = state.todoList.filter(todo => {
//     return todo.name.toLowerCase().includes(state.filter.search.toLowerCase())
//   })
//   return todoFilter;
// }
//set reselect to use if there is a selector that depends on another selector