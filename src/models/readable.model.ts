import type { ContentRatings } from "./common.model"

interface ReadableContentChapter {
    chapter_number: number | string
    title?: string,
    page_count?: number,
}

interface ReadableContentVolume {
    volume_number: number
    title?: string,
    chapters: ReadableContentChapter[]
    release_date: string
}

type ReadableContentType = 'book' | 'manga' | 'comic' | 'light_novel' | 'manhwa'
type ReadableContentStatus = 'ongoing' | 'completed' | 'hiatus' | 'cancelled'

export interface ReadableModel {
    type: ReadableContentType
    title: string
    alt_titles: string[]
    description?: string
    genres: string[]
    origin_country: string
    status: ReadableContentStatus
    publication_date?: string
    cover_url?: string
    publisher?: string
    demographic?: string
    authors: string[]
    artists: string[]
    volumes: ReadableContentVolume[]
    ratings: ContentRatings
    created_at: Date
    updated_at: Date
}