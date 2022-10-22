import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  //dispatch({ type: 'counter/increment' })
  // dispatch时候的命名空间
  name: 'users', 
  // 设置共享状态
  initialState: {
    infos:{}
  },
  reducers: {
    updateInfos: (state,action) => {
      state.infos = action.payload
    },
    clearInfos: (state) => {
      state.infos={}
    }
  }
});

export default usersSlice.reducer