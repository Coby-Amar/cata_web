import type { ContentRatings } from "./common.model"

interface WatchableContentSeasonEpisode {
    number: number
    title: string
    description: string
    release_date: string
    duration_minutes: number
}

interface WatchableContentSeason {
    number: number
    episodes: WatchableContentSeasonEpisode[]
}

interface WatchableContentCrew {
    name: string
    role: string
}

type WatchableContentCast = WatchableContentCrew & {
    character: string
}


interface WatchableContentLivestream {
    start_time: Date
    end_time: Date
    platform: string
}

type WatchableContentType = 'movie' | 'tv_show' | 'anime'
type WatchableContentStatus = "released" | "upcoming" | "live" | "ended"

interface WatchableContentStudio {
    name: string
    website: string
}


export interface WatchableModel {
    title: string
    director?: string
    type: WatchableContentType
    genres: string[]
    description?: string
    release_date?: string
    duration_minutes?: number
    language: string
    ratings: ContentRatings
    status: WatchableContentStatus
    thumbnail_url: string
    trailer_url: string
    content_url: string
    crew: WatchableContentCrew
    cast: WatchableContentCast
    seasons: WatchableContentSeason[]
    livestream_info: WatchableContentLivestream
    content_rating: string
    studio: WatchableContentStudio

    created_at: Date
    updated_at: Date
}