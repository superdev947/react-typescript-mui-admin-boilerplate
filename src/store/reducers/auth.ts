import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthState } from '@/types'

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: AuthState['user']; token: string }>) {
      state.isLoggedIn = true
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = null
      state.token = null
    },
    updateUser(state, action: PayloadAction<AuthState['user']>) {
      if (state.isLoggedIn && state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    }
  }
})

export default authSlice.reducer

export const { login, logout, updateUser } = authSlice.actions
