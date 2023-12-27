import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}
if( JSON.parse(localStorage.getItem("bga")) != null){
  initialState.user = JSON.parse(localStorage.getItem("bga"));
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      setUser: (state, action) => {
        state.user = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions

export default counterSlice.reducer