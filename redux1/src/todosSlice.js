const { createSlice } = require("@reduxjs/toolkit");

// configuration object for createSlice()
export const todosSlice = createSlice({
  name: "todos", // name of the slice
  initialState: [], // initial state of the slice
  reducers: {
    //reducer for "addTodo" action
    addTodo: (state, action) => {
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    },

    // reducer for "toggleTodo"
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
