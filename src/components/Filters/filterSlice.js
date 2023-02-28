//** redux-toolkit */
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: 'filter',
  initialState: {
    search: '',
    status: 'All',
    priority: []
  },
  reducers: {
    searchFilterChange: (state,action) => {
      //mutation || IMMER libraries
      state.search = action.payload;
    }, // => { type: 'filter/searchFilterChange' }
    statusFilterChange: (state,action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state,action) => {
      state.priority = action.payload;
    },
  }
})
//** redux-core */
// const initState = {
//   search: '',
//   status: 'All',
//   priority: []
// }

// const filterReducer = ( state = initState, action ) => {
//   switch (action.type) {
//     case 'filter/searchFilterChange':
//       return {
//         ...state,
//         search: action.payload
//       }
//     case 'filter/statusFilterChange':
//       return {
//         ...state,
//         status: action.payload
//       }
//     case 'filter/priorityFilterChange':
//       return {
//         ...state,
//         priority: action.payload
//       }
//     default:
//       return state;
//   }
// }

// export default filterReducer;