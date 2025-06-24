import type { FormEvent } from "react"

type OnSubmitSuccess<T> = (data: T) => void

export function useForm<T>(names: string[], onSubmitSuccess: OnSubmitSuccess<T>) {
    return {
        onSubmit(event: FormEvent<HTMLFormElement>) {
            event.preventDefault()
            event.stopPropagation()
            const formData = new FormData(event.currentTarget)
            const data = names.reduce((sum, name) => ({ ...sum, [name]: formData.get(name)?.valueOf() }), {})
            onSubmitSuccess(data as T)
        }
    }
}