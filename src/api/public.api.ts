import { useQuery } from "@tanstack/react-query"

import appAxios from "./axios"
import type { WatchableModel } from "../models/watchable.model"
import type { ReadableModel } from "../models/readable.model"

interface PublicData {
    watchable: WatchableModel[],
    readable: ReadableModel[],
}

export function useTopRanked() {
    return useQuery<PublicData>({
        queryKey: ['topRanked'],
        queryFn: async () => {
            const { data } = await appAxios.get('/public/top_ranked')
            return data
        },
        staleTime: 1000 * 60 * 5
    })
}

export function useRecentlyAdded() {
    return useQuery<PublicData>({
        queryKey: ['recentlyAdded'],
        queryFn: async () => {
            const { data } = await appAxios.get('/public/recently_added')
            return data
        },
        staleTime: 1000 * 60 * 5
    })
}