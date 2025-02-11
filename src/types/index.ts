export interface User {
  email: string
  password: string
}

export interface AuthState {
  isLoggedIn: boolean
  user: User | null
  token: string | null
}
