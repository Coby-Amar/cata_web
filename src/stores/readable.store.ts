import { create } from 'zustand'
import type { ReadableModel } from '../models/readable.model'

interface ReadableState {
    readables: ReadableModel[]
    setReadables(readables: ReadableModel[]): void
    addReadable(readable: ReadableModel): void
    addReadables(readables: ReadableModel[]): void
}

export const readableStore = create<ReadableState>((set) => ({
    readables: [],
    setReadables(readables) {
        set(() => ({ readables }))
    },
    addReadable(readable) {
        set((state) => ({ readables: [...state.readables, readable] }))

    },
    addReadables(readables) {
        set((state) => ({ readables: [...state.readables, ...readables] }))
    }
}))