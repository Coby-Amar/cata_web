import { create } from 'zustand'

import type { WatchableModel } from '../models/watchable.model'

interface WatchableState {
    watchables: WatchableModel[]
    setWatchable(watchables: WatchableModel[]): void
    addWatchable(watchable: WatchableModel): void
    addWatchables(watchables: WatchableModel[]): void
}

export const readableStore = create<WatchableState>((set) => ({
    watchables: [],
    setWatchable(watchables) {
        set(() => ({ watchables }))
    },
    addWatchable(watchable) {
        set((state) => ({ watchables: [...state.watchables, watchable] }))
    },
    addWatchables(watchables) {
        set((state) => ({ watchables: [...state.watchables, ...watchables] }))
    }
}))