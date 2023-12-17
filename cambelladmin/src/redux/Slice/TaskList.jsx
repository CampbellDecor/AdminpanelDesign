import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { allTaskList } from '../Thunks/Booking'
const todoadepter = createEntityAdapter({
  selectId: task => task.todoID

})

const TodoSlice = createSlice({
  name: 'task',
  initialState: todoadepter.getInitialState({
    loading: false,
    error: ''
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(allTaskList.pending, (state, action) => {
        state.loading = true
      })
      .addCase(allTaskList.rejected, (state, action) => {
        state.loading = false
        state.error = action.data
      })
      .addCase(allTaskList.fulfilled, (state, action) => {
        state.loading = false
        todoadepter.upsertMany(state, action.payload)
      })

  }
})
export const {
  selectAll: AlltodoTask,
  selectById: todoById,
  selectTotal: todocount,
  selectIds: todoset
} = todoadepter.getSelectors(state => state.task)
export default TodoSlice.reducer
