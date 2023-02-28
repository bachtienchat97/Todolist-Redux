import { combineReducers } from "redux";

import filterReducer from "../components/Filters/filterReducer";
import todoListReducer from "../components/TodoList/todoListReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoListReducer
})
//cách khác
// const rootReducer = ( state = {}, action ) => {
//   return {
//     filter: filterReducer(state.filter, action),
//     todoList: todoListReducer(state.todoList, action),
//   }
// }

export default rootReducer;