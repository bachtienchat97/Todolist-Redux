//** redux-toolkit */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoSlice =  createSlice({
  name: 'todoList',
  initialState: { status: 'idle', todos: [] },
  reducers: {
    addTodo: (state,action) => {
      //mutation || IMMER libraries
      state.push(action.payload);
    }, // => { type: 'todoList/addTodo' } action creators
    toggleTodoStatus: (state,action) => {
      const currentTodo = state.find(todo => todo.id === action.payload);
      if(currentTodo) currentTodo.completed = !currentTodo.completed;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, (state,action) => {
      state.status = 'loading';
    }).addCase(fetchTodos.fulfilled, (state,action) => {
      state.todos = action.payload;
      state.status = 'idle';
    }).addCase(addNewTodo.fulfilled, (state,action) => {
      state.todos.push(action.payload); // result return of addNewTodo line 42
    }).addCase(updateTodo.fulfilled, (state,action) => {
      let currentTodo = state.todos.find(todo => todo.id === action.payload);
      currentTodo = action.payload;
    })
  }
})

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('/api/todos');
  const data = await response.json();
  return data.todos;
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo)
  });
  const data = await response.json();
  return data.todos;
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async (updateTodo) => {
  const response = await fetch('/api/updateTodo', {
    method: 'POST',
    body: JSON.stringify(updateTodo)
  });
  const data = await response.json();
  return data.todos;
})
/** 
 * => todos/fetchTodos/pending
 * => todos/fetchTodos/fullilled
 * => todos/fetchTodos/rejected
 */
export default todoSlice;
//action: (object) and action creators : () => { return action }
//thunk action (function) and thunk creators : () => { return thunk action }
// export function addTodos (todo){ //thunk function || thunk action || thunk creators
//   return function addTodosThunk(dispatch, getState) {
//     console.log({todo})
//     console.log('THUNK', getState())
//     //middleware can custom a payload {name: 'learn react updated'}
//     todo.name = 'learn react updated';
//     dispatch(todoSlice.actions.addTodo(todo));
//     console.log('[addTodosThunk after]', getState());
//   }

// }
//** redux-core */
// const initState = [
//     { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
//     { id: 2, name: 'Learn React', completed: true, priority: 'Low' },
//     { id: 3, name: 'Learn Redux', completed: false, priority: 'High' }
// ]

// const todoListReducer = ( state = initState, action ) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [
//           ...state, //clone lại state hiện tại, immuntate : bất biến
//           action.payload
//       ]
//     case 'todoList/toggleTodoStatus':
//       return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo) //clone lại todo hiện tại và cập nhật !completed
//     default:
//       return state;
//   }
// }

// export default todoListReducer;