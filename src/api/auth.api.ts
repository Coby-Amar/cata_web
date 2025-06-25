import { useMutation, useQuery } from "@tanstack/react-query"
import type { UserModel } from "../models/user.model"
import appAxios from "./axios"
import authStore from "../stores/auth.store"

export interface LoginData {
    username: string
    password: string
}

export function useRegister(payload: UserModel) {
    return useQuery({
        queryKey: ['register'],
        async queryFn() {
            const { data } = await appAxios.post('/auth/register', payload)
            return data as UserModel
        }
    })
}

export function useLogin() {
    const login = authStore((state) => state.login)
    return useMutation({
        mutationKey: ['login'],
        onSuccess: login,
        async mutationFn(payload: LoginData) {
            const { data } = await appAxios.post('/auth/login', payload)
            return data
        },
    })
}

export function useLogout() {
    const logout = authStore((state) => state.logout)
    return useMutation({
        mutationKey: ['logout'],
        onSuccess: logout,
        async mutationFn() {
            await appAxios.post('/auth/logout')
        },
    })
}