import type { ReadableModel } from "./readable.model";
import type { WatchableModel } from "./watchable.model";

interface UserRating {
    id: string;
    type: 'watchable' | 'readable';
    score: number;
    rated_at?: Date;
}

type UserRole = 'user' | 'moderator' | 'admin'

export interface UserModel {
    username: string;
    email: string;
    avatar_url?: string;
    bio?: string;
    roles: UserRole[];
    watchlist: WatchableModel[];
    readlist: ReadableModel[];
    ratings: UserRating[];
    created_at: Date;
    updated_at: Date;
}