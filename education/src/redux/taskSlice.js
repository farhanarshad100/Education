import { createSlice } from "@reduxjs/toolkit"
const tasksSlice = createSlice({
    name: "task",
    initialState: [],
    reducers:{
        addTask: (state, action) =>{
            state.push({
              id: Date.now(),
              title:action.payload,
              completed: false,  
            })
        },
        toggleTask:(state, action) =>{
            const task = state.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed
        },
        deleteTask: (state, action) =>{
            return state.filter((t) => t.id !== action.payload);
        },
    },
});

export const {addTask, toggleTask, deleteTask} = tasksSlice.actions
export default tasksSlice.reducer;