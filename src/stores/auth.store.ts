import { create } from 'zustand'
import type { UserModel } from '../models/user.model'
import { ACCES_TOKEN } from '../utils/conts'

export type AuthStateUser = Pick<UserModel, 'email' | 'username'>

interface AuthState {
  user: AuthStateUser | null
  isLoggedin: boolean
  login(user: AuthStateUser): void
  logout(): void
}

const authStore = create<AuthState>((set) => ({
  user: null,
  isLoggedin: false,
  login(user) {
    set(() => ({
      user,
      isLoggedin: true,
    }))
  },
  logout() {
    set(() => ({
      user: null,
      isLoggedin: false,
    }))
    localStorage.setItem(ACCES_TOKEN, '')
  },
}))

export default authStore