import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { getTasks,addNewTask } from '../Thunks/Booking'
const todoadepter = createEntityAdapter({
  selectId: (todo) => todo.taskid
})

const TodoSlice = createSlice({
  name: 'todo',
  initialState: todoadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTasks.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = false
todoadepter.upsertMany(state,action.payload)
      })
     .addCase(addNewTask.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addNewTask.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.loading = false
        todoadepter.addOne(state, action.payload);
      })
  }
})
export const {
  selectAll: AllTasks,
  selectById: TaskById,
  selectTotal: taskcount,
  selectIds:taskset
} = todoadepter.getSelectors(state => state.todo);
export default TodoSlice.reducer
